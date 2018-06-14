var MongoClient = require('mongodb').MongoClient,
    assert = require('assert');

// Connection URL
var url = 'mongodb://127.0.0.1:27017/myblog';

MongoClient.connect(url,function(err,db){
    assert.equal(null,err);
    console.log("Connection successfully to server");
    db.close();
});