# sequelize-expressJs-CrudAppSimple CRUD App with Node.js and Sequelize
This is a simple CRUD (Create, Read, Update, Delete) application created using Node.js and Sequelize, which is a promise-based ORM (Object-Relational Mapping) for Node.js that supports multiple databases such as PostgreSQL, MySQL, SQLite, and MSSQL.

Prerequisites
Before running the application, you need to have the following installed on your machine:

Node.js
PostgreSQL
Installation
Clone this repository to your local machine using the following command:

bash
Copy code
git clone https://github.com/your-username/your-repo.git
Navigate to the project directory:

bash
Copy code
cd your-repo
Install the required dependencies:

Copy code
npm install
Create a PostgreSQL database for the application.

Copy the .env.example file to a new file called .env:

bash
Copy code
cp .env.example .env
Edit the .env file and replace the database credentials with your own:

makefile
Copy code
DB_NAME=your_database_name
DB_USERNAME=your_database_username
DB_PASSWORD=your_database_password
DB_HOST=your_database_host
DB_PORT=your_database_port
Run the database migrations to create the required tables:

Copy code
npx sequelize-cli db:migrate
Usage
To start the application, run the following command:

sql
Copy code
npm start
The application will be available at http://localhost:3000.

The following routes are available:

GET / - Display all items in the database.
POST / - Create a new item.
GET /:id - Display a single item by ID.
PUT /:id - Update an item by ID.
DELETE /:id - Delete an item by ID.
Credits
This application was created by Mazen Kouki.