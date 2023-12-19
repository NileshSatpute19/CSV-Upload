const express = require("express");
const config = require("./config/config");
const app = express();

app.listen(config.PORT, (err) => {
  if (err) {
    console.error("Unable to start server!!!");
  }
  console.table([
    { PORT: config.PORT, MESSAGE: config.startMsg, ENV: config.configenv },
  ]);
});
