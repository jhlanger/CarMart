const { Tag } = require('../models');

const tagData = [
  {
    tag_name: 'Leather Seats',
  },
  {
    tag_name: 'Sun Roof',
  },
  {
    tag_name: 'Backup Camera',
  },
  {
    tag_name: 'Navigation System',
  },
  {
    tag_name: 'Bluetooth',
  },
  {
    tag_name: 'Remote Start',
  },
  {
    tag_name: 'Blind spot monitoring',
  },
  {
    tag_name: 'Heated Seats',
  },
];

const seedTags = () => Tag.bulkCreate(tagData);

module.exports = seedTags;
