'use strict';
const { DataTypes } = require('sequelize');

module.exports = function (sequelize) {
  const Address = sequelize.define('Address', {
    province: DataTypes.STRING,
    city: DataTypes.STRING,
    street: DataTypes.STRING
  }, {
  });

  return Address;
};
