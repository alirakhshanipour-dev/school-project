const express = require("express")
const { allExceptionHandler } = require("./src/helpers/errors/allException")
const { notFoundHandler } = require("./src/helpers/errors/notFound")
const { server } = require("./src/config/server.conf")
const morgan = require("morgan")
const main = () => {
    const app = express()
    app.use(morgan("dev"))


    allExceptionHandler(app)
    notFoundHandler(app)

    server.listen(app)
}

main()