# WeLoveMovies

WeLoveMovies is a backend application for a movie theater that provides data about movies, theaters, and reviews. This project is designed to test the ability to build complex servers, access data through a database, and follow RESTful design principles.

## Features

- Install and use common middleware packages
- Receive requests through routes
- Access relevant information through route and query parameters
- Create an error handler for non-existent routes
- Build an API following RESTful design principles
- Create and customize a knexfile.js file
- Create a connection to the database with Knex
- Write database queries to complete CRUD routes in an Express server
- Return joined and nested data with Knex
- Write database migrations using Knex's migration tools

## Getting Started

### Prerequisites

- Node.js v18 or higher
- npm (Node Package Manager)

### Installation

1. Clone the repository:

```bash
git clone https://github.com/your-repo/WeLoveMovies.git

Navigate to the project directory:
cd WeLoveMovies

Install dependencies:
npm install

Running the Application
Start the server:
npm start

Use Postman or a similar tool to test the application routes.
Running Tests
To run the tests, use the following command:

npm test

Database Tables
The application uses the following database tables:

movies
theaters
reviews
critics
movies_theaters (join table)
Refer to the docs/tables/ folder for detailed information about each table.

Routes
The application provides the following routes:

/movies
/movies/:movieId
/movies/:movieId/theaters
/movies/:movieId/reviews
/theaters
Refer to the docs/routes/ folder for detailed information about each route.

Deployment
While deploying the frontend is recommended, it is optional and will not be graded. The backend server can be deployed to a cloud service of your choice.

Contributing
Contributions are welcome! If you find any issues or have suggestions for improvements, please open an issue or submit a pull request.