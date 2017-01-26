var mongoose = require('mongoose'),
syria = require('../models/graphSchema');





exports.getData = function(req, res){
  var t1, t2;

    syria.find({topic:'Syrian war'},function(err, docs){
        if (err){
              throw err;
        }

         function sortByFirstName(a, b) {
          var sortStatus = 0;
       
          if (a.date < b.date) {
              sortStatus = -1;
          } else if (a.date > b.date) {
                  sortStatus = 1;
          }
          return sortStatus;
      }
 
    docs.sort(sortByFirstName);
     t1 = docs; 


        syria.find({topic:'Syrian refugees'},function(error, docs){
            if (err){
                  throw err;
            }

      docs.sort(sortByFirstName);
   
     t2 = docs; 

    var res1 = {
        war:t1,
        refugees:t2
    };

    res.json(res1);

         });
    });
}

