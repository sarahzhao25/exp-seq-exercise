const express = require('express');
const restaurantsRouter = express.Router();
const { Restaurant, MenuItem } = require('../models');

// Your routes go here
restaurantsRouter.get('/', async (req, res, next) => {
  try {
    const restaurants = await Restaurant.findAll();
    // if you wanted to test your class method, you can do so here
    // const restaurants = await Restaurant.findBestBy(4);
    res.send(restaurants);
  } catch (e) {
    next(e);
  }
});
restaurantsRouter.get('/:restaurantId', async (req, res, next) => {
  try {
    const restaurant = await Restaurant.findByPk(req.params.restaurantId, {
      include: { model: MenuItem, as: 'dishes' }
    });
    res.send(restaurant);
  } catch (e) {
    next(e);
  }
});

restaurantsRouter.post('/', async (req, res, next) => {
  try {
    const restaurant = await Restaurant.create(req.body);
    res.status(201).send(restaurant);
  } catch (e) {
    next(e);
  }
});

restaurantsRouter.put('/:restaurantId', async (req, res, next) => {
  try {
    const restaurant = await Restaurant.findByPk(req.params.restaurantId);

    // You can test your rate instance method here if you'd like
    // await restaurant.rate(5);

    await restaurant.update(req.body);
    res.status(201).send(restaurant);
  } catch (e) {
    next(e);
  }
});

restaurantsRouter.delete('/:restaurantId', async (req, res, next) => {
  try {
    const restaurant = await Restaurant.findByPk(req.params.restaurantId);
    await restaurant.destroy();
    res.sendStatus(204);
  } catch (e) {
    next(e);
  }
});

module.exports = restaurantsRouter;
