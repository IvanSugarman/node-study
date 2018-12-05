const http = require('http');
const url = require('url');
const util = require('util');
const querystring = require('querystring');

// GET
http.createServer((req, res) => {
    console.log('start server');
    res.writeHead(200, {'Content-Type': 'text/plain; charset=utf-8'});

    let params = url.parse(req.url, true).query;
    res.write('Name: ' + params.name);
    res.write('\n');
    res.write('Url: ' + params.hell);
    res.end();
}).listen(3000);

// POST
http.createServer((req, res) => {
    // 暂存请求体的信息
    let post = '';

    // req的data事件监听函数，每当接受到请求体的数据，就累计到post变量中
    req.on('data', chunk => {
        post += chunk;
    });

    req.on('end', () => {
       post = querystring.parse(post);
       res.end(util.inspect(post));
    });
});