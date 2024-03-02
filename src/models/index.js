const { Sequelize } = require("sequelize")
const school = require("./school")
const image = require("./image")
const address = require("./address")
const { development } = require("../config/config.json")

const sequelize = new Sequelize(development)

const SchoolModel = school(sequelize)
const AddressModel = address(sequelize)
const ImageModel = image(sequelize)


SchoolModel.hasOne(AddressModel)
AddressModel.belongsTo(SchoolModel)

SchoolModel.hasMany(ImageModel)
ImageModel.belongsTo(SchoolModel)


module.exports = {
  sequelize, ImageModel, AddressModel, SchoolModel
};

