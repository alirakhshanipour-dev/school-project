const { Router } = require("express");
const { SchoolRouter } = require("./school.routes");
const { StaffRouter } = require("./staff.routes");
const { upload } = require("../helpers/upload/multer");



const router = Router()

router.use("/", SchoolRouter)
router.use("/staff", upload.single("image"), StaffRouter)

module.exports = {
    MainRouter: router
};
