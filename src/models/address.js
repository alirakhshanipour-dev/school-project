'use strict';
const { DataTypes } = require('sequelize');

module.exports = function (sequelize) {
  const Address = sequelize.define('Address', {
    province: {
      type: DataTypes.STRING,
      allowNull: false
    },
    city: {
      type: DataTypes.STRING,
      allowNull: false
    },
    street: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
  });

  return Address;
};
