const path = require("path");
const fs = require("fs");
const {
  getUploadedFiles,
  readCsvFile,
} = require("../subscribers/files.subscriber");

const main = async (req, res, next) => {
  try {
    const dirName = path.join(__dirname, "../../uploads");
    const uploadFiles = await getUploadedFiles(dirName);
    res.render("mainSection", {
      title: "CSV Uploader by nilesh",
      data: uploadFiles.data,
    });
    return next();
  } catch (error) {
    console.log(error, "Error in controller");
  }
};

const fileUploads = (req, res, next) => {
  try {
    const oldPath = req.file && req.file.path ? req.file.path : "";
    const newPath = path.join(
      __dirname,
      "../../uploads",
      `${Date.now()}_${req.file.originalname}`
    );
    fs.renameSync(oldPath, newPath);
    return res.redirect("/list-files");
  } catch (error) {
    console.log(error, "Error in uploads");
  }
};

const displayCSVData = async (req, res, next) => {
  try {
    const results = await readCsvFile(req.params.name);
    if (results.error) {
      res.status(500).send("technical error");
    }
    res.render("viewdata", {
      view: "csv-view",
      title: "CSV Uploader by nilesh",
      headers: Object.keys(results.data[0]),
      content: results.data,
    });
    return next();
  } catch (error) {
    console.log(error, "Error in controller");
  }
};
module.exports = {
  main,
  fileUploads,
  displayCSVData,
};
