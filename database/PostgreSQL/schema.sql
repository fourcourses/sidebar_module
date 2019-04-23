-- What I want to happen when a user wants to generate data.
-- 1. Create database if it doesn't already exists
-- 2. Create table if it doesn't already exist (following specific schema)
-- 3. Import file into that table

CREATE 

-- NOTE: let's use VARCHAR first since it's slower
-- Refactor to use CHAR for some, since it's faster
-- TEXT is the slowest
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
