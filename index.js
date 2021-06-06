const express = require("express");
const bodyParser = require("body-parser");
const fs = require("fs");
const app = express();

app.use(express.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

console.log("interval start");
let num = 0;

setInterval(() => {
  console.log(num);
  num += 1;
}, 1000);

app.get("/", (req, res) => {
  fs.readFile("index.html", (err, data) => {
    if (err) {
      console.log(err);
    } else {
      res.status(200).end(data);
    }
  });
});

app.post("/num", function (req, res) {
  console.log(req.body);
  let resData = Object.assign(req.body, { num: num });
  res.send(resData);
});

app.get("/num", function (req, res) {
  console.log(req.query.msg);
  let resData = Object.assign(req.query, { num: num });
  res.send(resData);
});

app.listen(3000);
