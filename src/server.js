var logger = require('koa-logger');

import app from './app';



app.use(logger());



app.listen(4000);
console.log('listening on port 4000');