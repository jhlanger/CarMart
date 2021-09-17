const { Color } = require('../models');

const colorData = [
  {
    color_name: 'Red',
  },
  {
    color_name: 'Blue',
  },
  {
    color_name: 'White',
  }
];

const seedColor = () => Color.bulkCreate(colorData);

module.exports = seedColor;