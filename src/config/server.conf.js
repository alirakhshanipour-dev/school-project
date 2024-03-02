const { config } = require("dotenv")

config()

const server = (() => {
    class Server {
        #port
        constructor() {
            this.#port = process.env.SERVER_PORT
        }

        listen(app) {
            app.listen(this.#port, () => {
                console.log(`server is running on http://localhost:${this.#port}`);
            })
        }
    }
    return new Server()
})()


module.exports = {
    server
};
