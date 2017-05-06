/*jshint esversion: 6*/

const express = require('express');
const router = express. Router();

module.exports = function(sequelize, DataTypes) {
  var Topic = sequelize.define("Topic", {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
      },
  }, {
    classMethods: {
      associate: function(models){
        Topic.hasMany(models.Message, {
          as: "Topic",
          foreignKey: {
            name: 'topic_id',
            allowNull: false
          }
        });
        Topic.belongsTo(models.User, {
          as: "Creator",
          foreignKey: {
            name: 'created_by',
            allowNull: false
          }
        });
      }
    }
  });
  return Topic;
};