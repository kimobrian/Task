"use strict";
const cuid = require("cuid");

module.exports = (sequelize, DataTypes) => {
  const Task = sequelize.define("Task", {
    id: {
      primaryKey: true,
      type: DataTypes.STRING,
      defaultValue: () => cuid()
    },
    name: { type: DataTypes.STRING, unique: true }
  }, {});
  Task.associate = function(models) {
    // associations can be defined here
  };
  return Task;
};