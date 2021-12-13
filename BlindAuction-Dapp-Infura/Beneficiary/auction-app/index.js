var express = require("express");
var app = express();

app.use(express.static("src"));
app.use(express.static("../auction-contract/build/contracts"));

// controller
app.get("/", function (req, res) {
  res.render("index1.html");
});

app.listen(3010, function () {
  console.log("Auction Dapp listening on port 3010!");
});
