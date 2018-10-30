// var http = require('http');
//
// http.createServer(function (req, res) {
//     res.writeHead(200, { 'Content-Type': 'text/plain'});
//
//     res.end('Hello World\n');
// }).listen(8888);
//
// console.log('Server Running at http://127.0.0.1:8888');

// fileStream

// var fs = require('fs');
//
// var data = fs.readFileSync('input.txt');
//
// console.log(data.toString());
// console.log('done');

// buffer
//
// const buf = Buffer.from([0x1, 0x2, 0x3, 0x4, 0x5]);
// // 隐式调用toJson
// const json = JSON.stringify(buf);
//
// // 输出: {"type":"Buffer","data":[1,2,3,4,5]}
// console.log(json);
//
// const copy = JSON.parse(json, (key, value) => {
//     console.log(key, value);
//     return value;
// });
//
// // 输出: <Buffer 01 02 03 04 05>
// console.log('copy-origin', copy);
// console.log('copy-buffer', Buffer.from(copy.data));

// Stream
var fs = require('fs');
var data  = '';

var readerStream = fs.createReadStream('input.txt');

readerStream.setEncoding('UTF8');

readerStream.on('data', chunk => {
    data += chunk;
});

readerStream.on('end', function() {
    console.log(data);
});

readerStream.on('error', function(err){
    console.log(err.stack);
});


var outputStream = fs.createWriteStream('output.txt');
var data = 'Hi, this is Oscar.';

outputStream.write(data, 'UTF8');

outputStream.end();

outputStream.on('finish', function() {
    console.log('写入完成');
});

outputStream.on('error', function(err){
    console.log(err.stack);
});

console.log("程序执行完毕");
