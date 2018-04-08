const couchdbWrp = require('couchdb-promises');
const dbOptions = {
    baseUrl: 'http://localhost:5984', 
    requestTimeout: 10000
};
const db = couchdbWrp(dbOptions);
const dbName  = 'koademo';
const couchdb = {
    dbName: dbName,
    db: db,
    createDoc: async ( data ) => { return await db.createDocument(dbName, data) },
    updateDoc: async ( data, docid ) => { return await db.createDocument(dbName, data, docid) },
    getDoc: async ( docid ) => { return await db.getDocument(dbName, docid) },
    getAllDocs: async () => { return await db.getAllDocuments(dbName, { include_docs: true }) },
    deleteDoc: async ( docid ) => { return await db.deleteDocument(dbName, docid) },
    findDocs: async ( optsSelector, fields ) => { return await db.findDocuments(dbName, { selector: optsSelector }, { fields: fields }) },
    test: () => { db.getDatabaseHead( function(){ return this.dbName; }).then(console.log).catch(console.error); }
}
// test connection
// db.getDatabaseHead( function(){ return this.dbName; }).then(console.log).catch(console.error); .then(console.info);
 

export default couchdb;