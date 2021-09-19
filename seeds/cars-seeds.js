const { Cars } = require('../models');

const carsData = [
  {
    make: 'Ford',
    model: 'F150',
    year: 2017,
    miles: 54000,
    price: 10000,
    user_id: 1,
    color: 'Blue',
    tags: 'Heated Seats, Backup Camera, Bluetooth',
    sold: 0,
  },
  {
    make: 'Ford',
    model: 'Focus',
    year: 2018,
    miles: 40000,
    price: 8000,
    user_id: 1,
    color: 'Red',
    tags: 'Heated Seats, Blindspot Monitoring, Remote Start',
    sold: 0,
  },
  {
    make: 'Ford',
    model: 'Ranger',
    year: 2019,
    miles: 30000,
    price: 15000,
    user_id: 2,
    color: 'Red',
    tags: 'Navigation System, Sun Roof, Bluetooth',
    sold: 0,
  },
  {
    make: 'Tesla',
    model: 'Model 3',
    year: 2017,
    miles: 54000,
    price: 18000,
    user_id: 3,
    color: 'White',
    tags: 'Remote Start, Backup Camera, Blindsport Monitoring',
    sold: 0,
  },
  {
    make: 'Tesla',
    model: 'Cyber Truck',
    year: 2020,
    miles: 3000,
    price: 25000,
    user_id: 5,
    color: 'White',
    tags: 'Leather Seats, Navigation System',
    sold: 0,
  },
];

const seedCars = () => Cars.bulkCreate(carsData);

module.exports = seedCars;
