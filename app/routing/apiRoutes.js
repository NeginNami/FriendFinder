




var friendsData= require("../data/friends"); 


module.exports = function(app) {


  app.get("/api/friends", function(req, res) {
    res.json(friendsData);
  });



  app.post("/api/friends", function(req, res) {
   
  	console.log(req.body);
  	console.log(req.body.name);
  	console.log(req.body.scores);
  	console.log(req.body.scores[9]);
  	//console.log(friendsData);
  	//-------------------------------------logic-------------------------

  	var diff=[];
  	

  	for (var i = 0; i < friendsData.length; i++) {
  		console.log("======================================");
  		diff[i]=0;
  		for (var j = 0; j<10; j++) {
  			//console.log(counter+": "+(parseInt(friendsData[i].scores[j])+10));

  			diff[i]= diff[i]+ Math.abs(parseInt(req.body.scores[j])-parseInt(friendsData[i].scores[j]));
  			console.log(Math.abs(parseInt(req.body.scores[j])-parseInt(friendsData[i].scores[j])));
  		}
  	}
  	console.log(diff);

  	var lessDiffIndex=0;
  	var minDiff=diff[0];
  	for (var i = 1; i < diff.length; i++) {
  		if (diff[i]<minDiff) {
  			lessDiffIndex=i;
  			minDiff=diff[i];
  		}
  	}
  	console.log("Less dif index: "+lessDiffIndex);
  	console.log(friendsData[lessDiffIndex]);
  	console.log(friendsData[lessDiffIndex].name);





  	//-------------------------------------Last Part------------------------
  	friendsData.push(req.body);
  	console.log(friendsData);
  	res.json(true);



  });



};