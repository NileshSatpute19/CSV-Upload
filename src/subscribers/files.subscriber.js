const fs = require("fs");
const util = require("util");

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

module.exports = {
  getUploadedFiles,
};
