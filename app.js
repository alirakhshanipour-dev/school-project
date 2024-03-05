const express = require("express")
const { allExceptionHandler } = require("./src/helpers/errors/allException")
const { notFoundHandler } = require("./src/helpers/errors/notFound")
const { server } = require("./src/config/server.conf")
const morgan = require("morgan")
const { sequelize } = require("./src/models")
const { MainRouter } = require("./src/routes/main.routes")
const path = require("path")

const main = async () => {
    const app = express()
    app.use(express.static("/public/uploads"))
    app.use(express.json())
    app.use(express.urlencoded({ extended: true }))
    app.use(morgan("dev"))
    app.use("/", MainRouter)


    await sequelize.sync({ alter: true })

    allExceptionHandler(app)
    notFoundHandler(app)

    server.listen(app)
}

main()
