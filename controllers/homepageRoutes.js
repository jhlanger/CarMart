const router = require('express').Router();
const sequelize = require('../config/connection');
const { Cars, User } = require('../models');


router.get('/', (req, res) => res.render('index'));

router.get('/login', (req, res) => res.render('login'));
router.get('/register', (req, res) => res.render('register'));
router.get('/about', (req, res) => res.render('about'));

module.exports = router;