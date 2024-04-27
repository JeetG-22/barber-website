create database if not exists willman_project;
use willman_project;

create table Customer (
	customer_id INT AUTO_INCREMENT PRIMARY KEY,
	first_name VARCHAR(255),
    last_name VARCHAR(255),
    phone_num VARCHAR(25),
    email_addr VARCHAR(255)
);

create table Hairstyle (
	hair_id INT AUTO_INCREMENT PRIMARY KEY,
    style_name VARCHAR(255)
);

create table Photo (
	photo_id INT AUTO_INCREMENT PRIMARY KEY,
    customer_id INT,
    hair_id INT,
	FOREIGN KEY(customer_id) REFERENCES Customer(customer_id),
    FOREIGN KEY(hair_id) REFERENCES Hairstyle(hair_id),
    upload_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    unique_photo MEDIUMBLOB
);

insert into Customer (first_name, last_name, phone_num, email_addr) values ("test", "test", "test", "test");
insert into Customer (first_name, last_name, phone_num, email_addr) values ("John", "Doe", "111-111-4141", "johndoe@gmail.com");
insert into Customer (first_name, last_name, phone_num, email_addr) values ("Hansel", "Dorn", "111-121-4141", "hd7903@yahoo.com");

SELECT * FROM CUSTOMER WHERE first_name = 'test' AND last_name = 'test' AND phone_num = 'test' AND email_addr = 'test';
select * from Customer;

-- ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'willman';