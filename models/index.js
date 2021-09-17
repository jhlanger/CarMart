// import all models
const Cars = require('./Cars');
const User = require('./User');
const ProductTag = require('./ProductTag');
const Tag = require('./Tag');
const Color = require('./Color');

// create associations
//users can have many cars for sale
User.hasMany(Cars, {
    foreignKey: 'user_id'
})
// car can only have one seller
Cars.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'SET NULL'
})
Color.hasMany(Cars, {
  foreignKey: 'color_id'
});
  // Cars belongToMany Tags (through ProductTag)
  Cars.belongsToMany(Tag, {
    through: ProductTag,
    foreignKey: 'product_id'
  });
  
  // Tags belongToMany Products (through ProductTag)
  
  Tag.belongsToMany(Cars, {
    through: ProductTag,
    foreignKey: 'tag_id'
  });


module.exports = { User, Cars, ProductTag, Tag };