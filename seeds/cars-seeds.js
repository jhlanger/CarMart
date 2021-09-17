const { Product } = require('../models');

const productData = [
  {
    model: 'Ford',
    make: 'F150',
    year: 2017,
    miles: 54000,
    price: 10000,
    user_id: 1,
    tag_id: 1,
  },
  {
    model: 'Ford',
    make: 'Focus',
    year: 2018,
    miles: 40000,
    price: 8000,
    user_id: 1,
    tag_id: 3,
  },
  {
    model: 'Ford',
    make: 'Ranger',
    year: 2019,
    miles: 30000,
    price: 15000,
    user_id: 2,
    tag_id: 2,
  },
  {
    model: 'Tesla',
    make: 'Model 3',
    year: 2017,
    miles: 54000,
    price: 18000,
    user_id: 3,
    tag_id: 4,
  },
  {
    model: 'Tesla',
    make: 'CyberTruck',
    year: 2020,
    miles: 3000,
    price: 25000,
    user_id: 5,
    tag_id: 4,
  },
];

const seedProducts = () => Product.bulkCreate(productData);

module.exports = seedProducts;
