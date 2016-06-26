//configaration file, adding some middleware
module.exports = {
	"database": "mongodb://root:abc123@ds023714.mlab.com:23714/thusithadb",
	"port": process.env.PORT || 3000,
	"secretKey": "yoursecretkey"
	//you can use this in serverJs
}