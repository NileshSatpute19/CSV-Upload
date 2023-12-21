const path = require("path");
const dotenv = require("dotenv");

const environment = "dev"; // It will be dynamic by reading system environment variable
const envPath = path.join(__dirname, `./environments/.${environment}.env`);
dotenv.config({
  path: envPath,
});

module.exports = {
  configenv: process.env.config,
  PORT: process.env.PORT,
  startMsg: process.env.startMsg,
};
