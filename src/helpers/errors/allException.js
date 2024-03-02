const allExceptionHandler = (app) => {
    app.use((err, req, res, next) => {
        const status = err.status || err.statusCode || 500
        const message = err.message || err.msg || "server error"
        const type = err.type || err.field || null

        return res.status(status).json({
            status,
            message,
            type
        })
    })
}

module.exports = {
    allExceptionHandler
};
