const express = require('express');
const cookieParse = require('cookie-parser');
const util = require('util');

const app = express();
app.use(cookieParse());

app.get('/', (req, res) => {
   console.log('Cookies: ' + util.inspect(req.cookies)) ;
});

app.listen(8081);