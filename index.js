const http = require('http');
const express = require('express');

const server = http.createServer(function (req, res) {   // 2 - creating server

    //handle incomming requests here..
    // set response header
        res.writeHead(200, { 'Content-Type': 'text/html' });

        // set response content
        res.write('<html><body><p>Das ist meine Home Page.</p></body></html>');
        res.end();

});

server.listen(5000); //3 - listen for any incoming requests
console.log('Super cool: Node.js web server at port 5000 is running..');
