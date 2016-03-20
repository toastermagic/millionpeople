'use strict';

// Staging specific configuration
// ==================================
module.exports = {
    datastore: {
        type: "memoryStore",
        config: {
            path: "../peopleData/output_1k.txt"
        }
    },    
    port: process.env.OPENSHIFT_NODEJS_PORT || process.env.PORT || 9000
};
