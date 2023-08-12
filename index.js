"use strict"; //yes.

// stuff //
const express = require("express");
const bodyParser = require("body-parser")
const path = require("path");

const app = express();
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))



// Config //
const config = require("./config.json")
const port = config.port
const authKey = config.authorization



// Routes //
const general = require("./Routes/general");
const db = require("./Routes/database");



// protected endpoints
function Auth(req, res, next) { 
  const auth = req.headers.authorization;
  
  if (auth == authKey) {
    next();
  } else {
    res.status(401);
    res.sendFile(path.join(__dirname, "/HTML/unauthorized.html"));
  }
}



// Routes //
app.get("/", general.main)
app.get("/test", general.test)
app.get("/authtest", Auth, general.test)

app.get("/api/get", db.view)
app.post("/api/add", Auth, db.add)
app.post("/api/remove", Auth, db.remove)



// App //

app.listen(port, () => console.log(`App active on port ${port}!`));