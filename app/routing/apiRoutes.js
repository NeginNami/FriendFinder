
var friendsData= require("../data/friends"); 


module.exports = function(app) {


  app.get("/api/friends", function(req, res) {
    res.json(friendsData);
  });



  app.post("/api/friends", function(req, res) {
  
  	//-------------------------------------logic-------------------------

  	var diff=[];
  	

  	for (var i = 0; i < friendsData.length; i++) {
  		diff[i]=0;
  		for (var j = 0; j<10; j++) 
  			
  			diff[i]= diff[i]+ Math.abs(parseInt(req.body.scores[j])-parseInt(friendsData[i].scores[j]));
  	}
  	
  	var lessDiffIndex=0;
  	var minDiff=diff[0];
  	for (var i = 1; i < diff.length; i++) {
  		if (diff[i]<minDiff) {
  			lessDiffIndex=i;
  			minDiff=diff[i];
  		}
  	}


  	//-------------------------------------Last Part------------------------
  	friendsData.push(req.body);

  	res.json(friendsData[lessDiffIndex]);

  });


};