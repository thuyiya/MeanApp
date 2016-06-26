//call the packages (express/ body-parser/ morgan)
var express = require("express");
var bodyParser = require("body-parser");
var morgan = require("morgan");
var config = require("./config");
var mongoose = require("mongoose");

//create new instance of express object
var app = express();

//call database
mongoose.connect(config.database, function(err){
	if (err) {
		console.log(err);
	}else{
		console.log("Connect to the database");
	}
});

//add the middleware
app.use(bodyParser.urlencoded({	extended: true }));
app.use(bodyParser.json());
app.use(morgan('dev'));


//use api
var api = require('./app/routes/api')(app, express);
app.use('/api', api);

app.get("*", function(req, res){
	res.sendFile(__dirname + '/public/view/index.html');
});


app.listen(config.port, function(err){
	if (err) {
		console.log(err);
	}else{
		console.log("Listening on port 3000");
	}
});