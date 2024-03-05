const autoBind = require("auto-bind")
const { SchoolService } = require("./school.service")
const { StatusCodes } = require("http-status-codes")
const { SchoolMsg } = require("./school.messages")


const SchoolController = (() => {
    class SchoolController {
        #service
        constructor() {
            autoBind(this)
            this.#service = SchoolService
        }

        async create(req, res, next) {
            try {
                const school = {
                    title: req.body?.title,
                    short_text: req.body?.short_text,
                    description: req.body?.description,
                    phone: req.body?.phone,
                }
                const address = req.body?.address

                const school_instance = await this.#service.create({ school, address })

                return res.status(StatusCodes.CREATED).json({
                    message: SchoolMsg.CreatedSuccess,
                    school_instance
                })

            } catch (error) {
                next(error)
            }
        }

        async addImages(req, res, next) {
            try {
                const files = req?.files
                console.log(files);
                const images = await this.#service.addImage(files)
                return res.status(StatusCodes.CREATED).json({
                    message: SchoolMsg.ImageAdded,
                    images
                })
            } catch (error) {
                next(error)
            }
        }

        async show(req, res, next) {
            try {
                const school = await this.#service.show()
                return res.status(StatusCodes.OK).json(school)
            } catch (error) {
                next(error)
            }
        }
    }

    return new SchoolController()

})()

module.exports = {
    SchoolController
};
