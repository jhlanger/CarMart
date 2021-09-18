const router = require('express').Router();

//const apiRoutes = require('./api/');
const buyCarRoutes = require('./buy-car-routes.js');
const sellCarRoutes = require('./sell-car-routes.js');


router.use('/buy', buyCarRoutes);
router.use('/add', sellCarRoutes);

//router.use('/api', apiRoutes);

module.exports = router;