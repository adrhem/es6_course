const mysql = require('mysql');
const configs = require('./configs.js');
const connection = mysql.createConnection(configs.mysql);
connection.connect();
module.exports = {
    home: {
        method: 'GET',
        path: '/',
        handler: (request, reply) => {
            reply('Hello world!');
        }
    },
    hello: {
        method: 'GET',
        path: '/hello/{user?}',
        handler: (request, reply) => {
            const user = request.params.user ? encodeURIComponent(request.params.user) : 'stranger';
            reply({
                user: user,
                status: true,
            });
        }
    },
    users: {
        method: 'GET',
        path: '/users',
        handler: (request, reply) => {
            connection.query(`SELECT * FROM users`, function (error, results, fields) {
                if (error) throw error;
                
                reply(results);
            });

        }
    },
    search: {
        method: 'GET',
        path: '/search/{user}',
        handler: (request, reply) => {
            const user = request.params.user;

            connection.query({
                sql:    `SELECT * 
                        FROM users 
                        WHERE first_name LIKE ?
                        OR last_name LIKE ?
                        OR email LIKE ?`,
                timeout: 40000, // 40s
                values: [user,user,user]
            }, function (error, results, fields) {
                if(error){
                    throw error;
                }

                reply(results);
            });

        }
    }
}