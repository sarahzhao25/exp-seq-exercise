const { db, MenuItem, Restaurant } = require('./models');

const restaurants = [{
  name: 'Restaurant A',
  cuisineType: 'CHINESE',
  rating: 4.41
}, {
  name: 'RESTAURANT B',
  cuisineType: 'MEXICAN',
  rating: 3.33
}, {
  name: 'RESTAURANT C',
  cuisineType: 'KOREAN',
  rating: 3.26
}, {
  name: 'RESTAURANT D',
  cuisineType: 'INDIAN',
  rating: 4.24
}, {
  name: 'RESTAURANT E',
  cuisineType: 'AMERICAN',
  rating: 2.82
}, {
  name: 'RESTAURANT F',
  cuisineType: 'MEXICAN',
  rating: 4.82
}, {
  name: 'RESTAURANT G',
  cuisineType: 'INDIAN',
  rating: 3.75
}
];

const menuItems = [{
  name: 'Item A',
  calories: 1200,
  isSpicy: true,
  restaurantId: 1
}, {
  name: 'Item B',
  calories: 300,
  isSpicy: false,
  restaurantId: 2
}, {
  name: 'Item C',
  calories: 500,
  isSpicy: true,
  restaurantId: 3
}, {
  name: 'Item D',
  calories: 800,
  isSpicy: false,
  restaurantId: 4
}, {
  name: 'Item E',
  calories: 700,
  isSpicy: true,
  restaurantId: 5
}, {
  name: 'Item F',
  calories: 1800,
  isSpicy: false,
  restaurantId: 6
}, {
  name: 'Item G',
  calories: 2000,
  isSpicy: true,
  restaurantId: 1
}, {
  name: 'Item H',
  calories: 300,
  isSpicy: false,
  restaurantId: 2
}, {
  name: 'Item I',
  calories: 600,
  isSpicy: true,
  restaurantId: 3
}, {
  name: 'Item J',
  calories: 900,
  isSpicy: false,
  restaurantId: 4
}];

const seed = async () => {
  try {
    await db.sync({ force: true });
    await Promise.all(restaurants.map(resy => Restaurant.create(resy)));
    console.log(`${restaurants.length} restaurants have been built!`);
    await Promise.all(menuItems.map(mI => MenuItem.create(mI)));
    console.log(`${menuItems.length} menu items have been added!`);
    console.log(`I am done seeding; let's get ready to ORDER!`);
    await db.close();
  } catch (e) {
    console.log('Something went wrong in the seeding!', e);
  }
}

seed();
