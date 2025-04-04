const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const ViolationEvent = sequelize.define('ViolationEvent', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    vcode: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    violation: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    beginningtime: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    initiallocation: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    endtime: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    finallocation: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    value: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    averagespeed: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    count: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    createdAt: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    updatedAt: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    publishedAt: {
        type: DataTypes.DATE,
        allowNull: true,
    }
}, {
    tableName: 'violation_events',
    timestamps: true,
});

module.exports = ViolationEvent;
