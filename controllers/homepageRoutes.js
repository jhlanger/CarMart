const router = require('express').Router();
const sequelize = require('../config/connection');
const { Cars, User } = require('../models');


router.get('/', (req, res) => res.render('homepage'));

router.get('/login', (req, res) => {
    if (req.session.loggedIn) {
        res.redirect('/');
        return;
    }

    res.render('login');
});

router.get('/register', (req, res) => {
    if (req.session.loggedIn) {
        res.redirect('/');
        return;
    }

    res.render('register');
});

router.get('/about', (req, res) => res.render('about'));

module.exports = router;