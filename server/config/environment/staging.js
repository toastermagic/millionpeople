'use strict';

// Staging specific configuration
// ==================================
module.exports = {
    datastore: {
        type: "memoryStore",
        config: {
            path: "./data/output_1M.txt"
        }
    },    
    port: process.env.OPENSHIFT_NODEJS_PORT || process.env.PORT || 9000
};
