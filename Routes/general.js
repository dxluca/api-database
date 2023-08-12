const path = require("path");

exports.test = function(req, res){
	res.json([
		{
			success: "true",
			response: "trolled",
		},
	]);
};

exports.main = function(req, res){
	res.sendFile(path.join(__dirname, "../HTML/index.html"));
};