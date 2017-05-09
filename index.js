/*jshint esversion: 6*/

const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const bodyParser = require('body-parser');
let currentUser;

app.use(express.static('./public'));
app.use(bodyParser.json());


//password login auth
const path = require('path');
//passport
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
//sessions
const session = require('express-session');
const redisStore = require('connect-redis')(session);
//password hashing
const saltRounds = 10;
const bcrypt = require('bcrypt');
//sequelize
const { user } = require('./models');
const db = require('./models');
const fs = require('fs');
const { User } = db;

//Start up sessions
app.use(session({
  store: new redisStore(),
  secret: 'the-forum-8',
  resave: false,
  saveUninitialized: true
}));

//setup passport
app.use(passport.initialize());
app.use(passport.session());

//passport local stratey
passport.serializeUser(function(user, done) {
  console.log('serializeing');
  return done(null, {
    id: user.id,
    name: user.name
  });
});

passport.deserializeUser(function(user, done) {
  console.log('deserializing');
  // ^ ---------- given from serializeUser
  User.findOne({
    where: {
      id: user.id
    }
  }).then(user => {
    return done(null, user); // <------- inserts into the request object
  });
});

passport.use(new LocalStrategy (
  function(name, password, done) {
    console.log('runs before serializing');
    User.findOne({
      where: {
        name: name
      }
    })
    .then ( user => {
      if (user === null) {
        console.log('user failed');
        return done(null, false, {message: 'bad username'});
      }
      else {
        console.log(user, user.password);
        bcrypt.compare(password, user.password)
        .then(res => {
          if (res) { return done(null, user); }
          else {
            return done(null, false, {message: 'bad password'});
          }
        });
      }
    })
    .catch(err => {
      console.log('error: ', err);
    });
  }
));


app.use('/api', require('./api'));

app.post('/loginAuth', function(req, res, next){
  console.log(req.body.dataValues);
  next();
}, passport.authenticate('local'), function (req,res) {

    console.log('logged in');
    currentUser = req.body.username;

});

app.get('/*', (req, res) =>{
  const rs = fs.createReadStream('./public/index.html');
  rs.on('open', () => {
    res.pipe(res);
  });
  res.on('error', (err) => {
    res.end(err);
  });
});


//db.sequelize.sync({forcesync: true});

app.listen(PORT, () =>{
  console.log(`Listening on ${PORT}`);
});