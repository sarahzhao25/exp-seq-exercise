const db = require('./db');
const MenuItem = require('./menuItem');
const Restaurant = require('./restaurant');

// This would be a great place to put associations!
Restaurant.hasMany(MenuItem, { as: 'dishes' });
MenuItem.belongsTo(Restaurant);

module.exports = {
  db,
  MenuItem,
  Restaurant
}
