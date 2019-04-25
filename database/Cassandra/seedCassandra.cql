
DROP KEYSPACE IF EXISTS "Restaurants";
CREATE KEYSPACE IF NOT EXISTS "Restaurants" WITH REPLICATION = {'class' : 'SimpleStrategy', 'replication_factor' : 1 };

USE "Restaurants";

CREATE TABLE "RestaurantListing" (
  restaurant_id int PRIMARY KEY,
  address text,
  neighborhood text,
  cross_street text,
  parking text,
  dining text,
  cuisines text,
  hours text,
  phone text,
  website text,
  payment text,
  dress text,
  chef text,
  catering text,
  private_facilities text,
);

COPY "RestaurantListing" FROM '/home/harrisonywu/Documents/HRImmersive/SDC/sidebar/database/GeneratedData/generatedData.csv' with header=true;
