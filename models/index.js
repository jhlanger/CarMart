// import all models
const Cars = require('./Cars');
const User = require('./User');


// create associations
//users can have many cars for sale
User.hasMany(Cars, {
    foreignKey: 'user_id'
});
// car can only have one seller
Cars.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'SET NULL'
});


module.exports = { User, Cars};