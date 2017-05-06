/*jshint esversion: 6*/

const express = require('express');
const topics = express.Router();

//Destructures object and requires in User associated with Topic
const { Topic, User } = require('../../models');


topics.get('/',(req, res ) =>{
  Topic.all({
    include: [
      {
        model: User,
        as: 'Creator'
      }
    ]
  })
  .then(( topics ) =>{
    res.json( topics );
  });
});

topics.post('/',(req, res) =>{
  Topic.create( req.body )
  .then(topics => {
    res.json( topics );
  })
  .catch( res.json.bind(res));
});

topics.put('/:id', (req,res) =>{
  Topic.update(
    {name: req.body.name},
    {where: {id: req.params.id}}
    )
  .then( result =>{
    return Topic.findById( req.params.id );
  })
  .then( topic =>{
    res.json(topic);
  })
  .catch(err =>{
    res.json(err);
  });
});

topics.get('/:id', (req,res) =>{
  Topic.findById(req.params.id)
  .then(( topic ) =>{
    res.json(topic);
  });
});

//unhandled rejection = not handling rejected promise




module.exports = topics;