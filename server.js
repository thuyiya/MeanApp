//call the packages (express/ body-parser/ morgan)
var express = require("express");
var bodyParser = require("body-parser");
var morgan = require("morgan");
var config = require("./config");

//add the middleware
app.use(bodyParser.urlencoded({	extended: true }));
app.use(bodyParser.json());
app.use(morgan('dev'));


//create new instance of express object
var app = express();

app.listen(config.port, function(err){
	if (err) {
		console.log(err);
	}else{
		console.log("Listening on port 3000");
	}
});