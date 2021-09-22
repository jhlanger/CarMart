const router = require('express').Router();

const userRoutes = require('./user');

router.use('/users', userRoutes);

const carRoutes = require('./car-routes');


router.use('/cars', carRoutes);


module.exports = router;