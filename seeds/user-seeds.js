const sequelize = require('../config/connection');
const { User, Cars } = require('../models');

const userdata = [
  {
    name: 'John Doe',
    email: 'johndoe@gmail.com',
    password: 'password123'
  },
  {
    name: 'Jane Doe',
    email: 'janedoe@gmail.com',
    password: 'password123'
  },
  {
    name: 'Sell Car',
    email: 'sellcar@gmail.com',
    password: 'password123'
  },
  {
    name: 'Buy Car',
    email: 'buycar@gmail.com',
    password: 'password123'
  },
  {
    name: 'Sell Two',
    email: 'selltwo@gmail.com',
    password: 'password123'
  }
];

const seedUsers = () => User.bulkCreate(userdata, {individualHooks: true});

module.exports = seedUsers;