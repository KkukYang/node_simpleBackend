const express = require("express");
const fs = require("fs");
const app = express();

console.log("interval start");
let num = 0;

setInterval(() => {
  console.log(num);
  num += 1;
}, 1000);
// https://www.w3schools.com/jsref/met_win_setinterval.asp

app.get("/", (req, res) => {
  fs.readFile("index.html", (err, data) => {
    if (err) {
      console.log(err);
    } else {
      res.status(200).end(data);
    }
  });
});
// https://expressjs.com/ko/4x/api.html#res.end

app.post("/num/post", function (req, res) {
  console.log(req);
  res.send("POST request to homepage");
});
// https://expressjs.com/ko/4x/api.html#app.post.method

app.get("/num/get", function (req, res) {
  console.log(req);
  res.send(`${num}`);
});

app.listen(3000);
// express basic
// https://www.npmjs.com/package/express
