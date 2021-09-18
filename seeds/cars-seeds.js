const { Cars } = require('../models');

const carsData = [
  {
    model: 'Ford',
    make: 'F150',
    year: 2017,
    miles: 54000,
    price: 10000,
    user_id: 1,
    color: 'Blue',
    tags: 'Heated Seats, Backup Camera, Bluetooth',
  },
  {
    model: 'Ford',
    make: 'Focus',
    year: 2018,
    miles: 40000,
    price: 8000,
    user_id: 1,
    color: 'Red',
    tags: 'Heated Seats, Blindspot Monitoring, Remote Start',
  },
  {
    model: 'Ford',
    make: 'Ranger',
    year: 2019,
    miles: 30000,
    price: 15000,
    user_id: 2,
    color: 'Red',
    tags: 'Navigation System, Sun Roof, Bluetooth',
  },
  {
    model: 'Tesla',
    make: 'Model 3',
    year: 2017,
    miles: 54000,
    price: 18000,
    user_id: 3,
    color: 'White',
    tags: 'Remote Start, Backup Camera, Blindsport Monitoring',
  },
  {
    model: 'Tesla',
    make: 'CyberTruck',
    year: 2020,
    miles: 3000,
    price: 25000,
    user_id: 5,
    color: 'White',
    tags: 'Leather Seats, Navigation System',
  },
];

const seedCars = () => Cars.bulkCreate(carsData);

module.exports = seedCars;
