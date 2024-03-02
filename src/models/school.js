'use strict';
const { DataTypes } = require('sequelize');

module.exports = function (sequelize) {
  const School = sequelize.define('School', {
    title: DataTypes.STRING,
    short_text: DataTypes.TEXT,
    description: DataTypes.TEXT,
    phone: DataTypes.STRING
  }, {
  });

  return School;
};
