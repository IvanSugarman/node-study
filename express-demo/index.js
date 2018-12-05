const express = require('express');
const app = express();
const bodyParser = require('body-parser');

// 创建 application/x-www-form-urlencoded 编码解析
const urlencodedParser = bodyParser.urlencoded({ extended: false });

app.use(express.static('public'));

app.post('/process_post', urlencodedParser, (req, res) => {
    const response = {
        'first_name': req.body.first_name,
        'last_name': req.body.last_name,
    };

    console.log(response);
    res.end(JSON.stringify(response));
});

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.get('/index.html', (req, res) => {
   res.sendFile(__dirname + '/index.html');
});

app.get('/process_get', (req, res) => {
   const response = {
       'first_name': req.query.first_name,
       'last_name': req.query.last_name,
   };

   console.log(response);
   res.end(JSON.stringify(response));
});


const server = app.listen(8081, '127.0.0.1', () => {
   let host = server.address().address;
   let port = server.address().port;

    console.log("应用实例，访问地址为 http://%s:%s", host, port);
});

// app.get('/', (req, res) => {
//     res.send('Hello, World!');
// });
//
// app.post('/del_user', (req, res) => {
//    console.log('/del_user 响应DELETE请求');
//    res.send('删除页面');
// });
//
// const server = app.listen(8080, () => {
//     let host = server.address().address;
//     let port = server.address().port;
//
//     console.log(server.address());
//     console.log('访问地址为http://%s:%s', host, port);
// });
//
