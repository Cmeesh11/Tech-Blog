# Tech-Blog

## Description

This tech blog application uses a combination of express-handlebars, express-session, and sequelize to create a simple blog site. It allows users to view existing posts, and once logged in, edit, update, and delete posts.
I created this to practice route handling, as well as strengthen my ability to use express-handlebars.

## Installation

If you wish to access the live heroku server, there is a link provided at the bottom of this README. However, if you would like to run this server on your client, complete the following steps:
- Run ```mysql -u root -p``` in your terminal and enter your password
- Run ```source [PATH to db/schema.sql]``` and type ```quit```
- Use the .env.EXAMPLE file as reference to creating your own .env file, and create your own called ```.env```
- Type ```npm start``` in the terminal
- Navigate to localhost:3001 in your browser

## Usage

Upon startup, you will not be logged in. If there are any existing posts, they should be displayed on the home page. To login, click on the login button in the navbar. Enter your login credentials if you have an account. If not, there is a link to create one underneath the form. Once logged in, you should be redirected to the dashboard, where you will have full control to modify the posts. Click on add comment, update, or delete to perform the respective action. You also have the ability to create a new post using the "New Post" button.

## Tests

When running this server on your local machine, I have provided a seed.js file that can be run using the command ```node seed.js```. This will populate the database with existing posts, users, and comments.

