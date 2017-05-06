/*jshint esversion: 6*/

const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const bodyParser = require('body-parser');

app.use(express.static('./public'));
app.use(bodyParser.json());

app.use('/api', require('./api'));



const db = require('./models');

db.sequelize.sync({});

app.listen(PORT, () =>{
  console.log(`Listening on ${PORT}`);
});