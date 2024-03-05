const { Router } = require("express");
const { SchoolRouter } = require("./school.routes");



const router = Router()

router.use("/", SchoolRouter)

module.exports = {
    MainRouter: router
};
