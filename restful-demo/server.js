const express = require('express');
const app = express();
const fs = require('fs');

const bodyParser = require('body-parser');

// 创建 application/x-www-form-urlencoded 编码解析
const urlencodedParser = bodyParser.urlencoded({ extended: false });

// list all users
app.get('/users', (req, res) => {
    res.setHeader('Content-Type', 'text/html;charset=utf8');
    fs.readFile(__dirname + '/users.json', 'utf8', (err, data) => {
       console.log(data);
       res.end(data);
    });
});

// add users
const user = {
    'user4': {
        'name': 'mohit',
        'password': 'password4',
        'profession': 'teacher',
        'id': 4
    }
};

app.get('/addUser', urlencodedParser, (req, res) => {
    // read exist user
    fs.readFile(__dirname + '/users.json', 'utf8', (err, data) => {
        data = JSON.parse(data);
        data['user4'] = user['user4'];
        res.end(JSON.stringify(user));
    });
});

app.get('/:id', (req, res) => {
    // read exist user
    fs.readFile(__dirname + '/users.json', 'utf8', (err, data) => {
       data = JSON.parse(data);
       let user = data['user' + req.params.id];
       console.log(user);
       res.end(JSON.stringify(user));
    });
});

const server = app.listen(8081, '127.0.0.1', () => {
   let host = server.address().address;
   let port = server.address().port;

   console.log('start http://%s:%s', host, port);
});