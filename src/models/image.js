'use strict';
const { DataTypes } = require('sequelize');

module.exports = function (sequelize) {
  const Image = sequelize.define('Image', {
    url: DataTypes.STRING
  }, {
  });

  return Image;
};
