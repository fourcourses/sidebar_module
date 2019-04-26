
DROP DATABASE IF EXISTS restaurants;
CREATE DATABASE restaurants;

-- Modify package.json script-> db:postgress-seed and this file to include the below
-- Therefore, script runs similar to Cassandra

-- \c restaurants

-- CREATE TABLE restaurants (
--   restaurant_id INTEGER NOT NULL UNIQUE,
--   address TEXT NOT NULL,
--   neighborhood TEXT NOT NULL,
--   crossStreet  TEXT NOT NULL,
--   parking TEXT NOT NULL,
--   dining TEXT NOT NULL,
--   cuisines TEXT NOT NULL,
--   hours TEXT NOT NULL,
--   phone TEXT NOT NULL,
--   website TEXT NOT NULL,
--   payment TEXT NOT NULL,
--   dress TEXT NOT NULL,
--   chef TEXT NOT NULL,
--   catering TEXT,
--   privateFacilities TEXT,
--   PRIMARY KEY restaurant_id
