const seedUsers = require('./user-seeds');
const seedCars = require('./cars-seeds');
const seedProductTag = require('./productTag-seeds');
const seedTags = require('./tags-seeds');

const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('--------------');
  await seedUsers();
  console.log('--------------');

  await seedCars();
  console.log('--------------');

  await seedProductTag();
  console.log('--------------');

  await seedTags();
  console.log('--------------');

  process.exit(0);
};

seedAll();
