CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL
);

INSERT INTO "user" ("username", "password")
VALUES ('bradley', '$2a$10$O0lw0Jy8SbXo3l0Czv2Ss.P8ue42nxFEbKdQ/.DvFmNGfO.cUIGny'), ('user3', '$2a$10$O0lw0Jy8SbXo3l0Czv2Ss.P8ue42nxFEbKdQ/.DvFmNGfO.cUIGny'), ('user4', '$2a$10$O0lw0Jy8SbXo3l0Czv2Ss.P8ue42nxFEbKdQ/.DvFmNGfO.cUIGny');

CREATE TABLE "categories" (
	"id" SERIAL PRIMARY KEY,
	description VARCHAR (50)
);

INSERT INTO "categories" (description)
VALUES ('Kitchen'), ('Electronics'), ('Bath'), ('Movies'), ('Music'), ('Bed');

CREATE TABLE "products" (
	"id" SERIAL PRIMARY KEY,
	p_name VARCHAR (80),
	cat_id INT REFERENCES "categories" ON DELETE CASCADE,
	price DECIMAL,
	stock INT
);

ALTER SEQUENCE products_id_seq RESTART WITH 1;

INSERT INTO "products" (p_name, cat_id, price, stock)
VALUES ('Knife', 1, 29.99, 10), ('Blender', 1, 59.99, 15), ('Dining Table', 1, 299.99, 5), ('iPhone', 2, 999.99, 7), ('PS5', 2, 399.99, 4), ('Laptop', 2, 799.99, 5), ('Toothbrush', 3, 3.99, 20), ('Toothpaste', 3, 4.99, 20), ('Shower Curtain', 3, 29.99, 5), ('Titanic', 4, 9.99, 3), ('Dodgeball', 4, 9.99, 2), ('The Matrix', 4, 7.99, 8), ('Electric Guitar', 5, 499.95, 2), ('Drumset', 5, 1299.89, 2), ('Bass Guitar', 5, 349.95, 1), ('Microphone', 5, 299.98, 3), ('Mattress', 6, 999.99, 2), ('Night Stand', 6, 89.90, 3), ('Blanket', 6, 47.99, 5);

CREATE TABLE "cart" (
	"id" SERIAL PRIMARY KEY,
	user_id INT REFERENCES "user" ON DELETE CASCADE,
	product_id INT REFERENCES "products" ON DELETE CASCADE
);

CREATE TABLE "ship_address" (
	"id" SERIAL PRIMARY KEY,
	user_id INT REFERENCES "user" ON DELETE CASCADE,
	first_name VARCHAR (20),
	last_name VARCHAR (20),
	address VARCHAR (200),
	city VARCHAR (50),
	state VARCHAR (50),
	zip INT
);
ALTER SEQUENCE products_id_seq RESTART WITH 1;

INSERT INTO "ship_address" (user_id, first_name, last_name, address, city, state, zip)
VALUES (1, 'Cassen', 'Gerber', '8521 11th Ave S', 'Bloomington', 'Minnesota', 55420);

CREATE TABLE "bill_address" (
	"id" SERIAL PRIMARY KEY,
	user_id INT REFERENCES "user" ON DELETE CASCADE,
	first_name VARCHAR (20),
	last_name VARCHAR (20),
	address VARCHAR (200),
	city VARCHAR (50),
	state VARCHAR (50),
	zip INT
);
ALTER SEQUENCE products_id_seq RESTART WITH 1;

INSERT INTO "bill_address" (user_id, first_name, last_name, address, city, state, zip)
VALUES (1, 'Cassen', 'Gerber', '8521 11th Ave S', 'Bloomington', 'Minnesota', 55420);

DROP TABLE "bill_address";
DROP TABLE "ship_address";
DROP TABLE "products" CASCADE;