'use strict';

// Development specific configuration
// ==================================
module.exports = {
    datastore: {
        type: "memoryStore",
        config: {
            path: "../peopleData/output_1M.txt"
        }
    },
    port: process.env.OPENSHIFT_NODEJS_PORT || process.env.PORT || 8123
};
