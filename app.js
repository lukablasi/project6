const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const saucesRoutes = require('./routes/sauces');
const userRoutes = require('./routes/user');
const app = express();
const path = require('path');



mongoose.connect('mongodb+srv://lukablasi:l79u456k13a@cluster0.mrkbf.mongodb.net/project6?retryWrites=true&w=majority')
  .then(() => {
    console.log('Successfully connected to MongoDB Atlas!');
  })
  .catch((error) => {
    console.log('Unable to connect to MongoDB Atlas!');
    console.error(error);
  });

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});

app.use(bodyParser.json());

app.use('/images', express.static(path.join(__dirname, 'images')));

app.use('/api/stuff', saucesRoutes);
app.use('/api/auth', userRoutes);

app.use('/api/sauces', saucesRoutes);


app.use((req, res) => {
   res.json({ message: 'Your request was successful!' }); 
});

module.exports = app;