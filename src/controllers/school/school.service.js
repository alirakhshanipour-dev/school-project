const autoBind = require("auto-bind")
const { SchoolModel } = require("../../models")
const { AddressModel } = require("../../models")
const { ImageModel } = require("../../models")

const SchoolService = (() => {
    class SchoolService {
        #model
        constructor() {
            autoBind(this)
            this.#model = SchoolModel
        }
        async create(data) {
            const { school, address } = data
            const _address = await AddressModel.create(address)
            const _school = await this.#model.create(school)

            await _school.setAddress(_address);

            return true

        }

        async addImage(files) {
            const imageUrls = files.map(file => {
                return "http://localhost:3000/public/uploads/" + file.filename
            })
            const _images = await ImageModel.bulkCreate(imageUrls.map(url => ({ url })));
            const _school = await this.#model.findOne()
            await _school.addImages(_images)

            return true

        }

        async show() {
            const school = await this.#model.findOne({
                attributes: {
                    exclude: ['createdAt', 'updatedAt'],
                },
                include: [
                    {
                        model: AddressModel,
                        attributes: ['province', 'city', 'street'],
                        as: 'Address',
                    },
                    {
                        model: ImageModel,
                        attributes: ['url'],
                        as: 'Images',
                    },
                ],
            })
            return school
        }

    }
    return new SchoolService()
})()


module.exports = {
    SchoolService
};
