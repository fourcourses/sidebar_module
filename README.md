# sidebar

> The sidebar module for the OpenTabs FEC. The sidebar module shows the important information for each restaurant (e.g. hours, dress code, cuisines, neighborhood, etc.). There is a map with address on top, when clicked it will open a new tab with Google Maps and the specific address.

# Set Up

# CRUD API Endpoints

| Endpoint                                | Type   | Operation                    |
|-----------------------------------------|--------|------------------------------|
| `/restaurants/:id`                             | GET    | Get restaurant information    |


## Related Projects

  - https://github.com/opentabs/menu
  - https://github.com/opentabs/photo-carousel
  - https://github.com/opentabs/reviews
  - https://github.com/opentabs/reservation-calendar

## Table of Contents

1. [Usage](#Usage)
1. [Requirements](#requirements)
1. [Development](#development)

## Usage

> 
1. Set up connection to the database.
2. Comment out the correct database endpoint in our server file.
3. Run the following script in the project's root directory.
```sh
npm start
```
Then visit the following url - #id is any number between 1 and 1e7.
localhost:3003/restaurants/#id



## Requirements

An `nvmrc` file is included if using [nvm](https://github.com/creationix/nvm).

- Node 6.13.0
- etc

## Development

### Installing Dependencies

From within the root directory:

```sh
npm install -g webpack
npm install
```

