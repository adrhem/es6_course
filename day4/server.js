'use strict';
const Hapi = require('hapi');
const routes = require('./routes.js');

const server = new Hapi.Server();
server.connection({ port: process.env.PORT, host: 'localhost' });

server.route(routes.home);
server.route(routes.hello);
server.route(routes.users);
server.route(routes.search);

server.start((err) => {

    if (err) {
        throw err;
    }
});