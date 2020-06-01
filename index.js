const express = require('express');

const server = express()

const PORT = 3000; 

const project = require('./api/project')

server.use(express.json());

server.listen(PORT, ()=> {
console.log('listening  on 3000')
})

server.use('/', project)

module.exports = server;
