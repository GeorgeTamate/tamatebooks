
-- CREATE TABLES

drop table if exists books;

create table if not exists books (
  id int(11) auto_increment,
  title varchar(150),
  author varchar(150),
  year date,
  primary key (id)
);

drop table if exists pages;

create table if not exists pages (
  id int(11) auto_increment,
  content text,
  page_number int(11),
  book_id int(11),
  primary key (id),
  foreign key fk_book(book_id) references books(id)
);


-- SEED TABLES

insert into books (title, author, year) values ('The Beginning of All Things', 'John Jackson', '1968-01-01');
insert into books (title, author, year) values ('Standing Right in the Middle', 'Mike Moore', '2000-01-01');
insert into books (title, author, year) values ('The End of the World', 'Emily Ericksen', '2012-01-01');


insert into pages (content, page_number, book_id) values ('The Beginning of All Things, Page 1. The Beginning of All Things, Page 1. The Beginning of All Things, Page 1.\nThe Beginning of All Things, Page 1. The Beginning of All Things, Page 1. The Beginning of All Things, Page 1.\nThe Beginning of All Things, Page 1. The Beginning of All Things, Page 1. The Beginning of All Things, Page 1.', 1, 1);
insert into pages (content, page_number, book_id) values ('The Beginning of All Things, Page 2. The Beginning of All Things, Page 2. The Beginning of All Things, Page 2.\nThe Beginning of All Things, Page 2. The Beginning of All Things, Page 2. The Beginning of All Things, Page 2.\nThe Beginning of All Things, Page 2. The Beginning of All Things, Page 2. The Beginning of All Things, Page 2.', 2, 1);
insert into pages (content, page_number, book_id) values ('The Beginning of All Things, Page 3. The Beginning of All Things, Page 3. The Beginning of All Things, Page 3.\nThe Beginning of All Things, Page 3. The Beginning of All Things, Page 3. The Beginning of All Things, Page 3.\nThe Beginning of All Things, Page 3. The Beginning of All Things, Page 3. The Beginning of All Things, Page 3.', 3, 1);

insert into pages (content, page_number, book_id) values ('Standing Right in the Middle, Page 1. Standing Right in the Middle, Page 1. Standing Right in the Middle, Page 1.\nStanding Right in the Middle, Page 1. Standing Right in the Middle, Page 1. Standing Right in the Middle, Page 1.\nStanding Right in the Middle, Page 1. Standing Right in the Middle, Page 1. Standing Right in the Middle, Page 1.', 1, 2);
insert into pages (content, page_number, book_id) values ('Standing Right in the Middle, Page 2. Standing Right in the Middle, Page 2. Standing Right in the Middle, Page 2.\nStanding Right in the Middle, Page 2. Standing Right in the Middle, Page 2. Standing Right in the Middle, Page 2.\nStanding Right in the Middle, Page 2. Standing Right in the Middle, Page 2. Standing Right in the Middle, Page 2.', 2, 2);
insert into pages (content, page_number, book_id) values ('Standing Right in the Middle, Page 3. Standing Right in the Middle, Page 3. Standing Right in the Middle, Page 3.\nStanding Right in the Middle, Page 3. Standing Right in the Middle, Page 3. Standing Right in the Middle, Page 3.\nStanding Right in the Middle, Page 3. Standing Right in the Middle, Page 3. Standing Right in the Middle, Page 3.', 3, 2);

insert into pages (content, page_number, book_id) values ('The End of the World, Page 1. The End of the World, Page 1. The End of the World, Page 1.\nThe End of the World, Page 1. The End of the World, Page 1. The End of the World, Page 1.\nThe End of the World, Page 1. The End of the World, Page 1. The End of the World, Page 1.', 1, 3);
insert into pages (content, page_number, book_id) values ('The End of the World, Page 2. The End of the World, Page 2. The End of the World, Page 2.\nThe End of the World, Page 2. The End of the World, Page 2. The End of the World, Page 2.\nThe End of the World, Page 2. The End of the World, Page 2. The End of the World, Page 2.', 2, 3);
insert into pages (content, page_number, book_id) values ('The End of the World, Page 3. The End of the World, Page 3. The End of the World, Page 3.\nThe End of the World, Page 3. The End of the World, Page 3. The End of the World, Page 3.\nThe End of the World, Page 3. The End of the World, Page 3. The End of the World, Page 3.', 3, 3);

