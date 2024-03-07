const autoBind = require("auto-bind")
const { StaffModel, ImageModel } = require("../../models")
const createHttpError = require("http-errors")
const { StaffMsg } = require("./staff.messages")

const StaffService = (() => {
    class StaffService {
        #model
        constructor() {
            autoBind(this)
            this.#model = StaffModel
        }

        async create(data) {
            const {
                fullname, description, yearsOfService, field, degree, category, position, image
            } = data
            await this.checkStaffExistsByName(fullname)

            const _staff = await this.#model.create({
                fullname, description, yearsOfService, field, degree, category, position
            })
            console.log(image);

            if (image) {
                const imageUrl = "http://localhost:3000/public/uploads/" + image.filename
                const _image = await ImageModel.create({ url: imageUrl });
                await _staff.addImage(_image)
            }

            return true
        }

        async show() {
            const staffs = await this.#model.findAll({
                include:
                {
                    model: ImageModel,
                    attributes: ['url'],
                    as: 'Images',
                }
            })
            return staffs
        }


        async get(id) {
            const staff = await this.checkStaffExistsById(id)
            return staff
        }

        async delete(id) {
            const staff = await this.checkStaffExistsById(id)
            if (staff) {
                await staff.destroy()
            }
            return true
        }


        // asistant methods
        async checkStaffExistsByName(name) {
            const staff = await this.#model.findOne({ where: { fullname: name } })
            if (staff) {
                return new createHttpError.BadRequest(StaffMsg.StaffExists)
            }
            return true
        }

        async checkStaffExistsById(id) {
            const staff = await this.#model.findOne({ where: { id } })
            if (!staff) {
                return new createHttpError.NotFound(StaffMsg.StaffNotFound)
            }
            return staff
        }
    }

    return new StaffService()
})()


module.exports = {
    StaffService
};
