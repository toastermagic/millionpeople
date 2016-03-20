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
    sql_datastore: {
        type: "sqlAzure",
        config: {
            sqlServer: {
                user: 'reader',
                password: '<sUlqiot`gNWEzlb=e,ybzvimsFT7_&#$!~<Eov}eCeTtqhT',
                server: 'tmagic.database.windows.net', // You can use 'localhost\\instance' to connect to named instance
                database: 'Peoples',

                options: {
                    encrypt: true // Use this if you're on Windows Azure
                }
            }
        }
    },
    port: process.env.OPENSHIFT_NODEJS_PORT || process.env.PORT || 80,
    root: "/dist/public"
};
