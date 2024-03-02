const { StatusCodes } = require("http-status-codes")
const { errMsg } = require("./error.messages")

const notFoundHandler = (app) => {
    app.use((req, res, next) => {
        return res.status(StatusCodes.NOT_FOUND).json({
            status: StatusCodes.NOT_FOUND,
            message: errMsg.NotFoundRoute
        })
    })
}

module.exports = {
    notFoundHandler
};
