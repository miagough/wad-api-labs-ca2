# Assignment 2 - Web API.

Name: Mia Gough

## Features.

 + Login Page
 + Sign Up Page
 + Top Rated Page
 + Credits Page

## Setup requirements.

No non-standard setup requirements

## API Configuration

.env file needed in movies folder with the following variables:

REACT_APP_TMDB_KEY=YOURKEY
FAST_REFRESH=false

.env file needed in movies-api folder with the following variables:

NODE_ENV=production
PORT=8080
HOST=localhost

MONGO_DB=YourMongoURL
SEDD_DB=True
SECRET=YourJWTSecret

REACT_APP_TMDB_KEY=YOURKEY


## API Design
Give an overview of your web API design, perhaps similar to the following: 

- /api/movies/tmdb | GET | Gets a list of movies 
- /api/movies/tmdb/{movieid} | GET | Gets a single movie 
- /api/movies/tmdb/{movieid}reviews | GET | Get all reviews for movie 
- /api/movies/tmdb/{movieid}reviews | POST | Create a new review for Movie 
- /api/movies/tmdb/favourites | POST | Add movie to favourites
- /api/movies/tmdb/upcoming | GET | Get all upcoming movies
- /api/movies/tmdb/{movieid}credits | GET | Get credits for movie
- /api/movies/tmdb/{movieid}recommendations | GET | Get movie recommendations
- /api/reviews/tmdb/form | POST | Add review
- /api/movies/tmdb/nowplaying | GET | Get now playing movies
- /api/movies/tmdb/popular | GET | Get now popular movies
- /api/movies/tmdb/toprated | GET | Get now top rated movies



## Security and Authentication

I added passport authentication to the express app in movies-api/authenticate/index.js. I created a JWT strategy to extract the user from the token in the request and verify it as a valid username.

## Integrating with React App

I integrated my react app with the API by adding this line of code "proxy":"http://localhost:8080" to my package.json file so it will forward any request for unknown resources to the express app on port 8080.

The login and signup pages use the Web API instead of the TMDB API.


  
