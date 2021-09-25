const router = require('express').Router();
const sequelize = require('../config/connection');
const { Cars, User } = require('../models');
const auth = require('../util/auth.js')



router.get('/', (req, res) => res.render('addCar'));


// Add a car
router.post('/', auth, (req, res) => {
  let { make, model, year, miles, price, color, tags, description } = req.body;
  let errors = [];
  let user_id=req.session.user_id;

  // Validate Fields
  if(!model) {
    errors.push({ text: 'Please add your vehicle model' });
  }
  if(!make) {
    errors.push({ text: 'Please add your vehicle make' });
  }
  if(!year) {
    errors.push({ text: 'Please add your vehicle year' });
  }
  if(!miles) {
    errors.push({ text: 'Please add your vehicles number of miles' });
  }
  if(!price) {
    errors.push({ text: 'Please add a price for your vehicle' });
  }
  if(!color) {
    errors.push({ text: 'Please add your vehicle color' });
  }


  // Check for errors
  if(errors.length > 0) {
    res.render('addCar', {
      errors,
      make, 
      model,
      year, 
      miles, 
      price, 
      color,
      tags,
      description
    });
  }else{

    // Make lowercase and remove space after comma
    //tags = tags.toLowerCase().replace(/,[ ]+/g, ',');

    // Insert into table
    Cars.create({
        make, 
        model,
        year, 
        miles, 
        price,
        user_id, 
        color,
        tags,
        description
    })
      .then(addCarData => res.redirect('/buy'))
      .catch(err => res.render('error', {error:err.message}))
  }
});




module.exports = router;