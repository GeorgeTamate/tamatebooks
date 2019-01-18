module.exports = {
    "up": "create table books (id int(11) auto_increment, title varchar(150), author varchar(150), year date, primary key (id));",
    "down": "drop table books;"
};
