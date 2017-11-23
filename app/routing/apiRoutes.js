




var friendsData= require("../data/friends"); 


module.exports = function(app) {


  app.get("/api/friends", function(req, res) {
    res.json(friendsData);
  });



  app.post("/api/friends", function(req, res) {
   
  	console.log(req.body);
  	console.log(friendsData);
  	friendsData.push(req.body);
  	//console.log(friendsData[0].name);
  	
  	res.json(true);



  });



};