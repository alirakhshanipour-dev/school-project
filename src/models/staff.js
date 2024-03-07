// models/staff.js

const { DataTypes } = require('sequelize');

module.exports = function (sequelize) {
    const Staff = sequelize.define(
        'Staff',
        {
            fullname: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            description: {
                type: DataTypes.TEXT,
            },
            field: {
                type: DataTypes.STRING
            },
            yearsOfService: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
            degree: {
                type: DataTypes.ENUM('کارشناسی', 'کارشناسی ارشد', 'دکتری'),
                allowNull: false,
            },
            category: {
                type: DataTypes.ENUM('کادر اجرایی', 'معلم', 'خدمات'),
                allowNull: false,
            },
            position: {
                type: DataTypes.STRING,
            },
        },
        {}
    );

    return Staff;
};
