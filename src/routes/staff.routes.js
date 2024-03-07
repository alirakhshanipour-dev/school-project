const { Router } = require("express");
const { StaffController } = require("../controllers/staff/staff.controller");

const router = Router()

router.post("/create", StaffController.create)
router.get("/", StaffController.show)
router.delete("/:id", StaffController.delete)
router.get("/:id", StaffController.get)

module.exports = {
    StaffRouter: router
};

