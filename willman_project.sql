create database if not exists willman_project;
use willman_project;

create table Customer (
	customer_id INT AUTO_INCREMENT PRIMARY KEY,
	first_name VARCHAR(50),
    last_name VARCHAR(50),
    phone_num VARCHAR(13),
    email_addr VARCHAR(100)
);

create table Hairstyle (
	hair_id INT AUTO_INCREMENT PRIMARY KEY,
    style VARCHAR(100)
);

create table Customer_Hairstyle(
	photo_id int AUTO_INCREMENT PRIMARY KEY,
	FOREIGN KEY(customer_id) REFERENCES Customer(customer_id),
    foreign key(hair_id) REFERENCES Hairstyle(hair_id),
    upload_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    unique_photo MEDIUMBLOB
);

insert into Customer (first_name, last_name, phone_num, email_addr) values ("John", "Doe", "111-111-4141", "johndoe@gmail.com");
insert into Customer (first_name, last_name, phone_num, email_addr) values ("Hansel", "Dorn", "111-121-4141", "hd7903@yahoo.com");

select * from Customer;

ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'willman';