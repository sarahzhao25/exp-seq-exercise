const express = require('express');
const app = express();
const PORT = 8080;

app.use(morgan('dev'));

app.use('/menuItems', require('./routes/menuItems'));
app.use('/restaurants', require('./routes/restaurants'));

app.listen(PORT, () => {
  console.log(`Nommin' away on PORT ${PORT}`);
})
