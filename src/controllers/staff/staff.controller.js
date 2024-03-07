const autoBind = require("auto-bind")
const { StaffService } = require("./staff.service")
const { StatusCodes } = require("http-status-codes")
const { StaffMsg } = require("./staff.messages")


const StaffController = (() => {
    class StaffController {
        #service
        constructor() {
            autoBind(this)
            this.#service = StaffService
        }

        async create(req, res, next) {
            try {
                const {
                    fullname, description, yearsOfService,
                    field, degree, category, position
                } = req.body

                const image = req.file

                await this.#service.create({
                    fullname, description,
                    yearsOfService, field, degree,
                    category, position, image
                })

                return res.status(StatusCodes.CREATED).json({
                    message: StaffMsg.StaffCreated
                })

            } catch (error) {
                next(error)
            }
        }

        async show(req, res, next) {
            try {
                const staffs = await this.#service.show()
                return res.status(StatusCodes.OK).json(staffs)
            } catch (error) {
                next(error)
            }
        }

        async get(req, res, next) {
            try {
                const { id } = req.params
                const staff = await this.#service.get(id)
                return res.status(StatusCodes.OK).json(staff)
            } catch (error) {
                next(error)
            }
        }

        async delete(req, res, next) {
            try {
                const { id } = req.params
                await this.#service.delete(id)
                return res.status(StatusCodes.NO_CONTENT).json({
                    message: StaffMsg.StaffDeleted
                })
            } catch (error) {
                next(error)
            }
        }
    }

    return new StaffController()
})()


module.exports = {
    StaffController
};
