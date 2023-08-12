const fs = require("fs");
const config = require("../config.json")
const file = config.file


exports.add = function(req, res) {
	const body = req.body;
	const jsonData = fs.readFileSync(file, "utf-8");

	let data = JSON.parse(jsonData);
	data.push(body)

	const string = JSON.stringify(data);
	fs.writeFileSync(file, string, "utf-8");


	res.json(
		[{
			"success": "true",
			"added": body,
			"data": data
		}]
	);
};



exports.remove = function(req, res) {
	const body = req.body;
	const id = body.id

	let jsonData = fs.readFileSync(file, "utf-8");
	let data = JSON.parse(jsonData);
	let removed = 0

	for (let i = 0; i < data.length; i++) {
		if (data[i]["id"] == id) {
			data.splice(i, 1)

			removed++
		}
	}

	if (removed > 0) {
		const string = JSON.stringify(data);
		fs.writeFileSync(file, string, "utf-8");
	}


	res.json(
		[{
			"success": "true",
			"removed": removed,
			"data": data
		}]
	);
};



exports.view = function(req, res) {
	const jsonData = fs.readFileSync(file, "utf-8");
	const data = JSON.parse(jsonData);
	
	res.json(data);
};