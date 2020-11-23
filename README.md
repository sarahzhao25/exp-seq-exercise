# Express and Sequelize Mob Programming Session

## Instructions
1. `npm install`
2. `createdb culinaryWorld`
3. Follow the instructions to create models in the `models/restaurant.js` file, and routes in the `routes/restaurants.js` file.

## Models

The model `MenuItem` has already been created for you. We are going to build out the `models/restaurant.js` file now with the following requirements:

### **Restaurant**

#### Fields:
- `name`
  - should be required, cannot be null or an empty string
- `cuisineType`
  - should be an enum of allowable options: CHINESE, MEXICAN, KOREAN, INDIAN, AMERICAN - can add more in the future
  - cannot be empty or null
- `rating`
  - should be a number up to 2 decimal places between 0 to 5
  - cannot be null
- `numVisits`
  - should be an integer, and cannot be null
  - defaults to 0

#### Virtual Fields
- `description`
  - Should return a string that describes what cuisine this restaurant serves.
  - Should be returned in the form of `${this.name} serves ${this.cuisine} food!`
- `approval`

#### Class/Instance Methods
- `findBestBy(rating)`
  - A method that finds all the best restaurants that are greater than and including `rating`.
- `rate(newRating)`
  - A method that will change the rating of an instance to `newRating` and save it to the database.

### Hooks
- `Changing number of visits`
  - Write a hook that will increase the number of visits by 1 every time someone makes a change in the database.
  - Which hook would you use? Why?
- `Capitalizing name`
  - Write a hook that will change the `name` field to reflect proper capitalization.
  - i.e.`this.name = 'restaurant first'` should be changed to `'Restaurant First'`

## Associations
- `Restaurant` and `MenuItem` should have a one to many relationship, where Restaurant has many MenuItems.
  - The restaurant's menuItems should be aliased as 'dishes'.

## Routes

### `/restaurants`
- `GET` `/restaurants`
  - This route should retrieve all restaurants.

- `GET` `/restaurants/:restaurantId`
  - This route should retrieve a single restaurant by id and eagerly load the menu items.

- `POST` `/restaurants`
  - This route should create a new restaurant in the database, and properly capitalize the input for the `name` field.
  - This route should return a 201 status code and the restaurant.

- `PUT` `/restaurants/:restaurantId`
  - This route should update the restaurant and, if the update includes a rating change, the `numVisits` field should also be updated.
  - This route should return a 201 status code and the restaurant.

- `DELETE` `/restaurants/:restaurantId`
  - This route should delete a restaurant from the database and send back a 204 status code.
