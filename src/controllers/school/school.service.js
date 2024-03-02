const autoBind = require("auto-bind")
const { SchoolModel } = require("../../models")

const SchoolService = (() => {
    class SchoolService {
        #model
        constructor() {
            autoBind(this)
            this.#model = SchoolModel
        }
        async cretae() { }

    }
    return new SchoolService()
})()


module.exports = {
    SchoolService
};
