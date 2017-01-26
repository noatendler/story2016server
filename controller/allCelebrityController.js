var mongoose = require('mongoose'),
allCelebrity = require('../models/graphSchema');





exports.getData = function(req, res){
  var t1, t2 , t3, t4, t5, t6, t7;

    allCelebrity.find({topic:'david bowie year'},function(err, docs){
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

        allCelebrity.find({topic:'prince year'},function(error, docs){
            if (err){
                  throw err;
            }
    docs.sort(sortByFirstName); 
     t2 = docs; 

      allCelebrity.find({topic:'alan rickman'},function(error, docs){
            if (err){
                  throw err;
            }
   docs.sort(sortByFirstName);
     t3 = docs;

     allCelebrity.find({topic:'mohammad ali'},function(error, docs){
            if (err){
                  throw err;
            }
   docs.sort(sortByFirstName);
     t4 = docs;

      allCelebrity.find({topic:'fidel castro'},function(error, docs){
            if (err){
                  throw err;
            }
   docs.sort(sortByFirstName);
     t5 = docs;

      allCelebrity.find({topic:'carrie fisher'},function(error, docs){
            if (err){
                  throw err;
            }
   docs.sort(sortByFirstName);
     t6 = docs;

      allCelebrity.find({topic:'dabby reynolds'},function(error, docs){
            if (err){
                  throw err;
            }
   docs.sort(sortByFirstName);
     t7 = docs;



    var res1 = {
        david:t1,
        prince:t2,
        alan:t3,
        mohammad:t4,
        fidel:t5,
        carrie:t6,
        debby:t7
    };

    res.json(res1);

         });
    });
          });
    });
     });
      });
        });
}

