const router = require('express').Router();
const sequelize = require('../config/connection');
const { Cars, User } = require('../models');

router.get('/', (req, res) => {
    console.log('======================');
    Cars.findAll({
        include: [
            {
                model: User,
                attributes: ['id', 'username', 'email']
            }
            
        ],
        where: {sold: 0, user_id: '1'},
        order: [['id', 'DESC']]
    }).then(dbCarData => {
       
        res.render('myCars', {dbCarData})
       
    }).catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

router.get('/:id', (req, res) => {
    console.log('======================');
    
    Cars.findOne({
        
        where: {
            
            id:req.params.id
        },
        include: [
            {
                model: User,
                attributes: ['id', 'username', 'email']
            }
        
        ]
        
        
    }).then(dbCarData => {
        //console.log(dbCarData);
        //console.log(dbCarData.dataValues.tags[0].dataValues.tag_name)
        //console.log(dbCarData.dataValues.tags.tag[0].dataValues.tag_name)
        res.render('single-car', dbCarData.dataValues);
       
    }).catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

router.put('/:id', (req, res) => {
    let { make, model, year, miles, price, color, tags, description } = req.body;
    let errors = [];
    let user_id=1;
  
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
      res.render('single-car', {
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
  
  
      // update table
      Cars.update({
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
        .then(addCarData => res.redirect('/'))
        .catch(err => res.render('error', {error:err.message}))
    }
  });


module.exports = router;