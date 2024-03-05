'use strict';
const { DataTypes } = require('sequelize');

module.exports = function (sequelize) {
  const Image = sequelize.define('Image', {
    url: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
  });

  return Image;
};
