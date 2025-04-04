const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './database.sqlite',
});


const Action = sequelize.define('Action', {
  eventId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  recordDate: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  actionDate: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  actionTaken: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  otherRemarks: {
    type: DataTypes.STRING,
    allowNull: true,
  },
});

sequelize.sync();

module.exports = Action;
