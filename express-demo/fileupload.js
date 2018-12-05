const express = require('express');
const app = express();
const fs = require('fs');

const bodyParser = require('body-parser');
const multer = require('multer');

app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(multer({dest: '/tmp/'}).array('image'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.get('/index.html', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.post('/file_upload', (req, res) => {
    console.log(req.files[0]);

    let des_file = __dirname + '/' + req.files[0].originalname;
    fs.readFile(req.files[0].path, (err, data) => {
        let response;
        fs.writeFile(des_file, data, err => {
            if (err) {
                console.log(err);
            } else {
                response = {
                    message: 'Successfully',
                    filename: req.files[0].originalname
                };
            }

            console.log(response);
            res.end( JSON.stringify(response));
        });
    });
});

const server = app.listen(8081, () => {
   console.log('instance start');
});