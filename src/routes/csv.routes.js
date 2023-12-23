const path = require("path");
const router = require("express").Router();
const multer = require("multer");
const upload = multer({ dest: path.join(__dirname, "../../uploads/") });

const {
  main,
  fileUploads,
  displayCSVData,
} = require("../controller/main.controller");

router.get("/list-files", main);
router.post("/upload", upload.single("csv"), fileUploads);
router.get("/view-data/:name", displayCSVData);

module.exports = router;
