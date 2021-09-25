const router = require('express').Router();
const sequelize = require('../config/connection');
const { Cars, User } = require('../models');
const auth = require('../util/auth');


router.get('/', auth, (req, res) => {
    console.log(req.session);
    console.log('======================');
    Cars.findAll({
        include: [
            {
                model: User,
                attributes: ['id', 'username', 'email']
            }
            
        ],
        where: {sold: 0},
        order: [['id', 'DESC']]
    }).then(dbCarData => {
        //const cars = dbCarData.map(car => car.get({ plain: true }));
        //console.log(dbCarData[0].dataValues.make);
        //const makeLower = dbCarData.dataValues.make
        res.render('buyCars', {dbCarData})
       // res.json(dbCarData);
    }).catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});


module.exports = router;