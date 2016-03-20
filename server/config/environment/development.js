'use strict';

// Development specific configuration
// ==================================
module.exports = {
    datastore: {
        type: "memoryStore",
        config: {
            path: "./data/output_1k.txt"
        }
    },
    port: process.env.OPENSHIFT_NODEJS_PORT || process.env.PORT || 8080
};
