const router = require('express').Router();
const sequelize = require('../config/connection');
const { Cars, User, Color, ProductTag, Tag } = require('../models');

router.get('/', (req, res) => {
    console.log('======================');
    Cars.findAll({
        include: [
            {
                model: User,
                attributes: ['id', 'username', 'email']
            },
            {
                model: Color,
                attributes: ['id', 'color_name']
            },
            {
                model: Tag,
                attributes: ['id', 'tag_name']
            }
        ]
    }).then(dbCarData => {
        //const cars = dbCarData.map(car => car.get({ plain: true }));
        //console.log(dbCarData[0]);
        res.render('buyCars', dbCarData)
       // res.json(dbCarData);
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
            },
            {
                model: Color,
                attributes: ['id', 'color_name']
            },
            {
                model: Tag,
                attributes: ['id', 'tag_name']
            }
        ]
    }).then(dbCarData => {
        //const cars = dbCarData.map(car => car.get({ plain: true }));
        //console.log(dbCarData[0]);
        res.render('buyCars', dbCarData)
       // res.json(dbCarData);
    }).catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

// test api data
router.get('/api', (req, res) => {
    console.log('======================');
    Cars.findAll({
        include: [
            {
                model: User,
                attributes: ['id', 'username', 'email']
            },
            {
                model: Color,
                attributes: ['id', 'color_name']
            },
            {
                model: Tag,
                attributes: ['id', 'tag_name']
            }
        ]
    }).then(dbCarData => {
        //const cars = dbCarData.map(car => car.get({ plain: true }));
        //console.log(dbCarData[0]);
        //res.render('buyCars', dbCarData)
        res.json(dbCarData);
    }).catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

router.get('/api/:id', (req, res) => {
    console.log('======================');
    Cars.findOne({
        where: {
            id:req.params.id
        },
        include: [
            {
                model: User,
                attributes: ['id', 'username', 'email']
            },
            {
                model: Color,
                attributes: ['id', 'color_name']
            },
            {
                model: Tag,
                attributes: ['id', 'tag_name']
            }
        ]
    }).then(dbCarData => {
        //const cars = dbCarData.map(car => car.get({ plain: true }));
        //console.log(dbCarData[0]);
        //res.render('buyCars', dbCarData)
       res.json(dbCarData);
    }).catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

module.exports = router;