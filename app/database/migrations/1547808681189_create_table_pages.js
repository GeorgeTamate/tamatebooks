module.exports = {
    "up": "create table pages (id int(11) auto_increment, content text, page_number int(11), book_id int(11), primary key (id), foreign key fk_book(book_id) references books(id));",
    "down": "drop table pages;"
};
