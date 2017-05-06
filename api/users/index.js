/*jshint esversion: 6*/

const express = require('express');
const users = express.Router();
const { User } = require('../../models');

users.get('/',(req, res ) =>{
  User.all()
  .then(( users ) =>{
    res.json( users );
  });
});

users.post('/',(req, res) =>{
  User.create( req.body )
  .then( res.json.bind(res))
  .catch( res.json.bind(res));
});

users.get('/:id', (req, res) =>{
  User.findById(req.params.id)
  .then(( user ) =>{
    res.json(user);
  });
});




module.exports = users;