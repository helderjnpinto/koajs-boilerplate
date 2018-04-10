var koa = require('koa');
const mount = require('koa-mount');
const graphqlHTTP = require('koa-graphql');
// const koaBody = require('koa-body');
var bodyParser = require('koa-bodyparser');

import routes from './routes'

var app = new koa();



app.use(bodyParser());
app.use(routes);
// app.use(koaBody({
//     jsonLimit: '1kb'
// }));

const mySchema = buildSchema(`  
  type User {
    name: String
  }
  type Query {
    users: [User]
  }
`);


app.use(mount('/graphql', graphqlHTTP({
    schema: mySchema,
    graphiql: true
})));

export default app