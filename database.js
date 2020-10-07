var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

  MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db('onlineJobApp');

    
    // dbo.createCollection("job_seeker_education_details", function(err, res) {
    //   if (err) throw err;
    //   console.log("Collection created!");
    //   db.close();
    // });

    dbo.createCollection("job_details", function(err, res) {
      if (err) throw err;
      console.log("Collection created!");
      db.close();
    });
  
  });

