const fs = require("fs");
const util = require("util");
const path = require("path");
const csv = require("csv-parser");

const getUploadedFiles = async (dirName) => {
  try {
    const readdir = util.promisify(fs.readdir);
    const files = await readdir(dirName);
    return { error: false, data: files };
  } catch (error) {
    console.log(error);
    return { error: error, data: null };
  }
};

const readCsvFile = async (fileName) => {
  try {
    const createReadStream = util.promisify(fs.createReadStream);
    const filePath = path.join(__dirname, `../../uploads/${fileName}`);
    const results = [];
    let headers;

    const stream = fs
      .createReadStream(filePath)
      .pipe(csv())
      .on("data", (data) => {
        // console.log(data);
        return results.push(data);
      })
      .on("end", () => {})
      .on("error", (error) => {
        console.log(error);
      });

    await new Promise((resolve, reject) => {
      stream.on("end", resolve);
      stream.on("error", reject);
    });

    return { error: false, data: results };
  } catch (error) {
    console.log(error);
    return { error: error, data: null };
  }
};

module.exports = {
  getUploadedFiles,
  readCsvFile,
};
