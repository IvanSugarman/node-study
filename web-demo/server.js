const http = require('http');
const fs = require('fs');
const url = require('url');

// create server
http.createServer((request, response) => {
   // parse request (include filename)
   let pathname = url.parse(request.url).pathname;

   // log filename
    console.log('Request for ' + pathname + ' received.');

    // read request content from fs
    fs.readFile(pathname.substr(1), (err, data) => {
        if (err) {
            console.log(err);
            response.writeHead(404, { 'Content-Type': 'text/html' });
        } else {
            response.writeHead(200, { 'Content-Type': 'text/html' });

            response.write(data.toString());
        }

        //send data
        response.end();
    })
}).listen(8080);

console.log('Server running at http://127.0.0.1:8080/');