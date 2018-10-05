'use strict';
module.exports = (sequelize, DataTypes) => {
  var User = sequelize.define('User', {
    identification: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true 
      },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    lastName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    birthDate: {
        type: DataTypes.DATEONLY,
        allowNull: false
    }
  });

  return User;
};