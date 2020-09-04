//Express and its dependencies
const express = require('express');
const app = require('express')();
const path = require('path');

//The socket.io server
const http = require('http').createServer(app);
app.use(express.static(path.join(__dirname, 'public')));


const routeDoor = 3000;

app.get('/', (req, res, next) =>{

    res.sendFile(path.join(__dirname, 'test.html'));

});

let server = app.listen(routeDoor, () => {

    console.log('Started on port: ' + routeDoor);

});

const io = require('socket.io')(server);

io.on('connection', (socket) => {

    console.log('A user connected: ' + socket.id);

    socket.on('test', CalledTest);

    function CalledTest (data){

        io.sockets.emit('test2', data);

    }

});


