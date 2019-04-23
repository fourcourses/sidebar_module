import { Sequelize } from "sequelize/types";


class Restaurants extends Model {}

Restaurants.init({
  restaurantID: Sequelize.STRING,
  address: Sequelize.TEXT,

}, {sequelize, modelName: 'restaurant'})

CREATE TABLE SidebarInfo (
  restaurantID integer ,
  address TEXT,
  neighborhood TEXT,
  crossStreet  TEXT,
  parking TEXT,
  dining TEXT,
  cuisines TEXT,
  hours TEXT,
  phone TEXT,
  website TEXT,
  payment TEXT,
  dress TEXT,
  chef TEXT,
  catering TEXT,
  privateFacilities TEXT,
  PRIMARY KEY (restaurantID)
) IF NOT EXISTS
