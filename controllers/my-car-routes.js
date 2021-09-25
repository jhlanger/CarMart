const router = require('express').Router();
const sequelize = require('../config/connection');
const { Cars, User } = require('../models');
const auth = require('../util/auth.js')

router.get('/',auth,  (req, res) => {
    console.log('======================');
    Cars.findAll({
        include: [
            {
                model: User,
                attributes: ['id', 'username', 'email']
            }

        ],
        where: { sold: 0, user_id: req.session.user_id },
        order: [['id', 'DESC']]
    }).then(dbCarData => {

        res.render('myCars', { dbCarData })

    }).catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

router.get('/:id', (req, res) => {
    console.log('======================');

    Cars.findOne({

        where: {

            id: req.params.id
        },
        include: [
            {
                model: User,
                attributes: ['id', 'username', 'email']
            }

        ]


    }).then(dbCarData => {
        //console.log(dbCarData.dataValues.tags);
        res.render('single-car', dbCarData.dataValues);

    }).catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});



module.exports = router;