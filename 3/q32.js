var MongoClient = require('mongodb').MongoClient
  , Server = require('mongodb').Server;

  MongoClient.connect('mongodb://localhost:27017/m101', function(err, db) {


    var col=db.collection("q32");

      col.count(function( err, res ) {
      
        console.log(res); 
      
      });

      
      var cursor=db.collection("q32").find({});
      cursor.skip(6);
      cursor.limit(2);

      cursor.sort({"grade":1});

      cursor.toArray(function(err,arr){
    
        console.log(arr);

      });
      

      db.close();
  });

