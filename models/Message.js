/*jshint esversion: 6*/

const express = require('express');
const router = express. Router();

module.exports = function(sequelize, DataTypes) {
  var Message = sequelize.define("Message", {
      body: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
  }, {
    classMethods: {
      associate: function(models){
        Message.belongsTo(models.Topic, {
          foreignKey: {
            as: "Topic",
            name: 'topic_id',
            allowNull: false
          }
        });
        Message.belongsTo(models.User, {
          as: "Author",
          foreignKey: {
            name: 'author_id',
            allowNull: false
          }
        });
      }
    }
  });
  return Message;
};