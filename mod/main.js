// const a = require('./out');
//
// a.world(1, 2, 3);

// console.log( process.memoryUsage() );


// process.on('beforeExit', code => {
//     setTimeout(function () {
//         console.info(process.uptime());
//     }, 0);
// });

process.stdout.write('Hello World!'+ "\n");

// 通过参数读取
process.argv.forEach(function(val, index, array) {
    console.log(index + ': ' + val);
});

// 获取执行路径
console.log(process.execPath);


// 平台信息
console.log(process.platform);