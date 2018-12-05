const http = require('http');

const options = {
    host: 'localhost',
    port: '8080',
    path: '/index.html',
};

const cb = function (response) {
  let body = '';

  response.on('data', data => {
      body += data;
  });

  response.on('end', () => {
     // complete
      console.log(body);
  });
};

// send request
const req = http.request(options, cb);
req.end();