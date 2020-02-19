let history = require('connect-history-api-fallback')

let express = require('express');
let path = require('path');
let serveStatic = require('serve-static');
app = express();
app.use(history());
app.use(serveStatic(__dirname));
let port = process.env.PORT || 5000;
app.listen(port);
console.log('server started ' + port);


