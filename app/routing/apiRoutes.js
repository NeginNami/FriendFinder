




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
  	friendsData.push(req.body);
  	console.log(friendsData);
  	res.json(true);



  });



};