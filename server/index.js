const express = require("express");
const debug = require("debug")("server");
const cors = require("cors");

const app = express();
const port = process.env.SERVER_PORT || 8080;

const morgan = require('morgan');

/*
app.use(function(req,res,next){
	res.header("Access-Control-Allow-Origin","*")
	res.header("Access-Control-Allow-Headers","Origin,X-Requested-With,Content-type,Accept");next();
});
*/
console.log(`Running on port ${port}`);
app.use(morgan('combined'));
/*app.use(cors({
  origin: "*"
}));
*/
app.get("/api/ping", (req, res) => {
  res.send({
    msg: "Hello, World"
  });
});

app.listen(port, () => debug(`Listening on port ${port}`));
