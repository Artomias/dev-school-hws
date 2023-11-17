create table users (
  id serial primary key,
  username varchar(50) unique,
  email varchar(50) unique,
  firstName varchar(50),
  lastName varchar(50),
  password varchar(50)
);

insert into users (username, email, firstname, lastname, password)
values ('Artomias', 'artemvinn@hotmail.com', 'Artem', 'Vinnytskyi', 'sample37')
returning *