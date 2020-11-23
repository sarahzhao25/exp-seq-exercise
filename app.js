const express = require('express');
const app = express();
const PORT = 8080;
const morgan = require('morgan');
const { db } = require('./models');

const setup = async() => {
  try {
    app.use(morgan('dev'));
    app.use(express.urlencoded({ extended: false }));
    app.use(express.json());

    app.use('/restaurants', require('./routes/restaurants'));

    await db.sync();
    app.listen(PORT, () => {
      console.log(`Nommin' away on PORT ${PORT}`);
    });
  } catch (e) {
    console.log(`Error in setup!: `, e);
  }
};

setup();
