/*jshint esversion: 6*/

const express = require('express');
const messages = express.Router();
const { Message, User, Topic } = require('../../models');
const LATEST_LIMIT = 10;

messages.get('/',(req, res ) =>{
  Message.all()
  .then(( messages ) =>{
    res.json( messages );
  });
});

messages.post('/',(req, res) =>{
  Message.create( req.body )
  .then( res.json.bind(res))
  .catch( res.json.bind(res));
});

messages.get('/latest', (req, res) =>{
  Message.all({
    include: [
      {
        model: User,
        as: 'Author'
      },
      {
        model: Topic,
        as: 'Topic'
      }
    ],
    order: [
      ['updatedAt', 'DESC']
    ],
    limit : LATEST_LIMIT
  })
  .then( res.json.bind(res) );
});

messages.get('/by-topic/:topic_id', (req, res) =>{
  Message.all({
    include: [
      {
        model: User,
        as: 'Author'
      },
      {
        model: Topic,
        as: 'Topic'
      }
    ],
    where: { topic_id: req.params.topic_id}
  })
  .then ( res.json.bind(res) );
});

messages.get('/by-user/:author_id', (req, res) =>{
  Message.all({
    include: [
    {
      model: User,
      as: 'Author'
    },
    {
      model: Topic,
      as: 'Topic'
    }
    ],
    where: { author_id: req.params.author_id}
  })
  .then( res.json.bind(res) );
});

module.exports = messages;