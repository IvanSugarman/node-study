const fs = require('fs');
const child_process = require('child_process');

for(let i = 0; i < 3; i++) {
    let workProcess = child_process.exec('node support.js ' + i, (err, stdout, stderr) => {
       if (err) {
           console.log(err.stack);
           console.log('Error code: '+ err.code);
           console.log('Signal received: '+ err.signal);
       }

       console.log('stdout: ' + stdout);
       console.log('stderr: ' + stderr);
    });

    workProcess.on('exit', code => {
        console.log('子进程已退出, 退出码' + code);
    });
}