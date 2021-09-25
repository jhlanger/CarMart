const router = require('express').Router();
const sequelize = require('../config/connection');
const { Cars, User } = require('../models');
const auth = require('../util/auth');


router.get('/', auth, (req, res) => {
    
    res.render('homepage')
    console.log(req.session);
});

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