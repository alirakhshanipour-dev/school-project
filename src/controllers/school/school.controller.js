const autoBind = require("auto-bind")
const { SchoolService } = require("./school.service")


const SchoolController = (() => {
    class SchoolController {
        #service
        constructor() {
            autoBind(this)
            this.#service = SchoolService
        }

        async cretae(req, res, next) {
            try {
                const data = {
                }
            } catch (error) {
                next(error)
            }
        }

    }
    new SchoolController()

})()

module.exports = {
    SchoolController
};
