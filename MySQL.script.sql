create database mercadoMistico;

use mercadoMistico;

create table usuarios (
	id int primary key auto_increment not null,
    nome varchar(245) not null,
    email varchar(245) not null,
    senha varchar(245) not null,
    status enum ("admin", "user") default("user"),
    created_at timestamp default current_timestamp
);
insert into usuarios (nome, email, senha, status)
values ("rafa", "rafa@gay", "12345", "admin");
select * FROM usuarios;
create table produtos (
	id int primary key auto_increment not null,
    nome varchar(245) not null,
    preco float,
    quantidade int
);
select * FROM produtos;
create table products(
	id int not null auto_increment primary key,
    title varchar(250),
    price double not null,
    image text not null,
    created_at timestamp default current_timestamp
);
select*from products;

