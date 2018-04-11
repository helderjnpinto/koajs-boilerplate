import couchdb from '../db/couchdb';

/** This is a description of the foo function. */
export const get = async ctx => {
  ctx.body = 'Hello World!'
}
/** This is a description of the foo function. */
export const post = async (ctx, next) => {
  const body = ctx.request.body;
  if (!body.name) ctx.throw(400, '.name required');

  console.log('POST ctx', body);
  
  const res = await couchdb.findDocs({name: body.name.toString()}, ['_id', 'name']);
  if(res.data.docs.length === 0) {
    const resc = await couchdb.createDoc(body);
    console.log('POST create doc', resc);
    ctx.body = {
      res: `The user ${body.name.toString().capitalize()} was created with success.`
    };
  } else {
    ctx.body = {
      res: `The user already exists`
    };
  }
  await next();
}


