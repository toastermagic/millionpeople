'use strict';

var _ = require('lodash');
var csv = require('csv-parser');
var fs = require('fs');

var MemoryStoreFactory = function(config) {
    var _ready = false;
    var people = [];
    return {
        connect: function() {
            if (_ready) {
                return;
            }
            _ready = true;
            console.log('memory store initialising', config.path);

            fs.createReadStream(config.path)
                .pipe(csv())
                .on('data', function(data) {
                    if (!data.FirstName) {
                        console.log('duff row', data);
                        return;
                    }
                    data.SearchKey = (data.FirstName + ' ' + data.LastName + ' ' + data.StreetAddress).toLowerCase();
                    data.PersonId = people.length + 1;
                    people.push(data);

                    if (people.length % 10000 === 0) {
                        console.log('file records read', people.length);
                    }
                })
                .on('error', function(err) {
                    console.error('file read error', err);
                })
                .on('end', function() {
                    console.log('file read ended', people.length);
                });
        },
        getById: function(personId) {
            return Promise.resolve(people[personId]);
        },
        stream: function(searchTerm, startCallback, rowCallback, endCallback) {
            if (searchTerm === null)
                return;

            startCallback();

            var rowCount = 0;
            searchTerm = searchTerm.toLowerCase();
            for (var index = 0; index < people.length && rowCount < 50; index++) {
                if (searchTerm === "" || people[index].SearchKey.indexOf(searchTerm) > -1) {
                    rowCount++;
                    if (rowCallback !== null) {
                        rowCallback(people[index]);
                    }
                }
            }

            console.log('done total', rowCount, 'of', people.length);
            if (endCallback !== undefined) {
                endCallback({ rowCount: rowCount, total: people.length });
            }
        }
    }
}

module.exports = MemoryStoreFactory;