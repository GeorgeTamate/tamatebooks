# tamatebooks

Simple App about books made with NodeJS.

## Requirements

- nodejs / npm
- MySQL is the used DBMS

## Configuration

### Dependencies

Install dependencies with the following command.

    $ npm install

### Database

Create a new database with MySQL for the application. Choose the database name of your preference.

### Environment Variables

Create a `.env` file in the root directory of the project with the following environment variables and fill with your  port of preference and database information.

```
HTTP_PORT=3000

DB_DBMS=mysql
DB_HOST=localhost
DB_USER=db_username
DB_PASS=db_user_password
DB_NAME=database_name
```

### Building the database

In `app/database/queries.sql` is a query that can be used to create tables and seed data.

But also, the [mysql-migrations](https://www.npmjs.com/package/mysql-migrations) module can do the migration and the seeding with a single command:

    $ node app/database/migration up

## Usage

### Run

You can start the application by running the following command from the root directory of the project:

    $ node index.js

### Endpoints

Here are some URLs that can be used to try the application endpoints. In this example `http://localhost:3000` is used, but be sure to change it depending on your configuration.

This URL with get all of the books in a JSON format array:
```
http://localhost:3000/books
```

The next URL gets a specific page of a book dictated by the format `book`/`{id of the book}`/`page`/`{number of the page}`/`{format}` :
```
http://localhost:3000/book/1/page/3/html
```
The available formats are `text` ("text/plain") and `html` ("text/html"), and return a HTTP response accordingly. If the format parameter is omitted, the text format will be assumed. Likewise, if the page parameters are ommited, it will search for the first page by default.

If the specified book or page do not exist, a `404 Not Found` will be returned.
