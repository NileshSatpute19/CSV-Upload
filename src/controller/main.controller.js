const path = require("path");
const fs = require("fs");
const { getUploadedFiles } = require("../subscribers/files.subscriber");

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
    const oldPath = req.file.path;
    const newPath = path.join(
      __dirname,
      "../../uploads",
      req.file.originalname
    );
    fs.renameSync(oldPath, newPath);
    return res.redirect("/list-files");
  } catch (error) {
    console.log(error, "Error in uploads");
  }
};

const displayCSVData = async (req, res, next) => {
  try {
    res.render("viewdata", {
      view: "csv-view",
      title: "CSV Uploader by nilesh",
      data: null,
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
