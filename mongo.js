var MongoClient = require('mongodb').MongoClient
  , assert = require('assert');

// Connection URL
var url = 'mongodb://sms.xet.me:27017/domains';

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("domains");
  var query = { url: "02.io" };
var query = "";  
dbo.collection("urls").find(query).limit(100).toArray(function(err, result) {
    if (err) throw err;
    console.log(result);
    db.close();
  });
});
