var logger = require('koa-logger');

import app from './app';



app.use(logger());

console.log('...', process.env.NODE_ENV);


app.listen(4000);
console.log('listening on port 4000');