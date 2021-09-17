const sequelize = require('../config/connection');
const { User} = require('../models');

const userdata = [
  {
    name: 'John Doe',
    username: 'johndoe',
    email: 'johndoe@gmail.com',
    password: 'password123'
  },
  {
    name: 'Jane Doe',
    username: 'janedoe',
    email: 'janedoe@gmail.com',
    password: 'password123'
  },
  {
    name: 'Sell Car',
    username: 'sellcar',
    email: 'sellcar@gmail.com',
    password: 'password123'
  },
  {
    name: 'Buy Car',
    username: 'buycar',
    email: 'buycar@gmail.com',
    password: 'password123'
  },
  {
    name: 'Sell Two',
    username: 'selltwo',
    email: 'selltwo@gmail.com',
    password: 'password123'
  }
];

const seedUsers = () => User.bulkCreate(userdata);

module.exports = seedUsers;