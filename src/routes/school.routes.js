const { Router } = require("express");
const { SchoolController } = require("../controllers/school/school.controller");
const { upload } = require("../helpers/upload/multer");

const router = Router()
router.post("/create", SchoolController.create)
router.post("/add-images", upload.array("images", 5), SchoolController.addImages)
router.get("/", SchoolController.show)

module.exports = {
    SchoolRouter: router
};
