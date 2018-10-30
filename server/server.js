const http = require('http');
const url = require('url');

function start(router) {
    function onRequest(request, response) {
        let pathname = url.parse(request.url).pathname;
         console.log('Request for' + pathname + ' received.');
    }
}