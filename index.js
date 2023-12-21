const express = require("express");
const config = require("./config/config");
const path = require("path");
const app = express();
const expressLayouts = require("express-ejs-layouts");

require("./database/mongo.database");

app.use(expressLayouts);
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "./views"));
app.use(express.static(__dirname + "/assets"));

app.get("/healthcheck", (req, res, next) => {
  res.json({ Status: "Active", ServerMessage: "CSV upload working fine" });
  return next();
});

app.use("/", require("./src/routes/csv.routes"));

app.listen(config.PORT, (err) => {
  if (err) {
    console.error("Unable to start server!!!");
  }
  console.table([
    { PORT: config.PORT, MESSAGE: config.startMsg, ENV: config.configenv },
  ]);
});
