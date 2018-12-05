const dns = require('dns');

dns.lookup('www.github.com', (err, address, family) => {
   console.log('ip地址: ' + address);
   dns.reverse(address, (err, hostname) => {
       if (err) console.log(err.stack);

       console.log('反向解析' + address + ':' + JSON.stringify(hostname));
   })
});