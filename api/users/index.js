/*jshint esversion: 6*/

const express = require('express');
const users = express.Router();
const { User } = require('../../models');
const bcrypt = require('bcrypt');
const saltRounds = 10;

users.get('/',(req, res ) =>{
  User.all()
  .then(( users ) =>{
    res.json( users );
  });
});

users.post('/',(req, res) =>{
  console.log(req.body);
  bcrypt.genSalt(saltRounds, function(err,salt) {
    bcrypt.hash(req.body.password, salt, function(err,hash){
      User.create({
        name: req.body.name,
        password: hash
      })
      .then( res.json.bind(res))
      .catch( res.json.bind(res));
    });

  });
});

users.put('/:id', (req,res) =>{
  User.update(
    {name: req.body.name},
    {where: {id: req.params.id}}
    )
  .then( result =>{
    return User.findById( req.params.id );
  })
  .then( user =>{
    res.json(user);
  })
  .catch(err =>{
    res.json(err);
  });
});

users.get('/:id', (req, res) =>{
  User.findById(req.params.id)
  .then(( user ) =>{
    res.json(user);
  });
});




module.exports = users;