const router = require('express').Router();
const sequelize = require('../config/connection');
const { Cars, User } = require('../models');
const auth2 = require('../util/auth2');


router.get('/', auth2, (req, res) => {
    const loggedIn = req.session.loggedIn;
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
        res.render('buyCars', {dbCarData,loggedIn})
      
    }).catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});


module.exports = router;