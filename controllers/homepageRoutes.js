const router = require('express').Router();
const auth = require('../util/auth');


router.get('/', auth, (req, res) => {
    const loggedIn = req.session.loggedIn
    res.render('homepage',{loggedIn});
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