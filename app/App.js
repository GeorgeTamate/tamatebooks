"use strict";

const http = require('http');
const Router = require('./router/Router');
const db = require('./database/DB');

class App {
    static run() {
        db.authenticate()
            .then(() => console.log('Database connected...'))
            .catch(err => {
                console.log('ERROR: -- ', err);
                console.log(err.errno);
            });

        const server = http.createServer(async function (req, res) {
            const router = new Router();
            const response = await router.handleRequest(req);
            res.writeHead(response.code, response.headers);
            res.write(response.body);
            res.end();
        });

        const port = process.env.HTTP_PORT || 3000;
        
        server.listen(port, function(err) {
            if(err) {
                return console.log('Error happened at Server.listen: -- ', err);
            }
            console.log('Server start at port ' + port);
        });
    }
}

module.exports = App;
