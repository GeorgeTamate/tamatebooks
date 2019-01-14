"use strict";

const http = require('http');
const Router = require('./router/Router');
const port = 3000;

class App {
    static run() {
        const server = http.createServer(function (req, res) {
            const router = new Router();
            const response = router.handleRequest(req);
            res.writeHead(response.code, response.headers);
            res.write(response.body);
            res.end();
        });
        
        server.listen(port, function(err) {
            if(err) {
                return console.log('something bad happened', err);
            }
            console.log("server start at port " + port);
        });
    }
}

module.exports = App;