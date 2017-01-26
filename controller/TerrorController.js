var mongoose = require('mongoose'),
terror = require('../models/graphSchema');





exports.getData = function(req, res){
    terror.find({topic:'Terror'},function(err, docs){
            
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

        console.log("docs "+docs);
        res.json(docs);
    });
}

