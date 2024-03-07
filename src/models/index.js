const { Sequelize } = require("sequelize")
const school = require("./school")
const image = require("./image")
const address = require("./address")
const staff = require("./staff")
const { development } = require("../config/config.json")

const sequelize = new Sequelize(development)

const SchoolModel = school(sequelize)
const AddressModel = address(sequelize)
const ImageModel = image(sequelize)
const StaffModel = staff(sequelize)

SchoolModel.hasOne(AddressModel)
AddressModel.belongsTo(SchoolModel)

SchoolModel.hasMany(ImageModel)
ImageModel.belongsTo(SchoolModel)

StaffModel.hasMany(ImageModel)
ImageModel.belongsTo(StaffModel)


module.exports = {
  sequelize, ImageModel, AddressModel, SchoolModel, StaffModel
};

