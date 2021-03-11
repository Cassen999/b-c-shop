CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL
);

INSERT INTO "user" ("username", "password")
VALUES ('bradley', '$2a$10$O0lw0Jy8SbXo3l0Czv2Ss.P8ue42nxFEbKdQ/.DvFmNGfO.cUIGny'), ('user3', '$2a$10$O0lw0Jy8SbXo3l0Czv2Ss.P8ue42nxFEbKdQ/.DvFmNGfO.cUIGny'), ('user4', '$2a$10$O0lw0Jy8SbXo3l0Czv2Ss.P8ue42nxFEbKdQ/.DvFmNGfO.cUIGny');

CREATE TABLE "genres" (
	"id" SERIAL PRIMARY KEY,
	description VARCHAR (50)
);
INSERT INTO "genres" (description)
VALUES ('Classical'), ('Electronic'), ('Rock'), ('Metal'), ('Jazz'), ('Blues');

CREATE TABLE "media-type" (
	"id" SERIAL PRIMARY KEY,
	description VARCHAR (50)
);
INSERT INTO "media-type" (description)
VALUES ('CD'), ('Vinyl'), ('Cassette'), ('Digital');

--CREATE TABLE "products" (
--	"id" SERIAL PRIMARY KEY,
--	p_name VARCHAR (80),
--	cat_id INT REFERENCES "categories" ON DELETE CASCADE,
--	price DECIMAL,
--	stock INT
--);

CREATE TABLE "artists" (
	"id" SERIAL PRIMARY KEY,
	"name" VARCHAR (100),
	"founded" INT,
	"city" VARCHAR (50),
	"state" VARCHAR (50),
	"country" VARCHAR (100)
);
INSERT INTO "artists" ("name", "founded", "city", "state", "country")
VALUES ('Polyphia', '2010', 'Minneapolis', 'Minnesota', 'United States'), ('Korn', '1995', 'St. Louis', 'Missouri', 'United States');

CREATE TABLE "albums" (
	"id" SERIAL PRIMARY KEY,
	"name" VARCHAR (80),
	artist_id INT REFERENCES "artists" ON DELETE CASCADE,
	genre_id INT REFERENCES "genres" ON DELETE CASCADE,
	type_id INT REFERENCES "media-type" ON DELETE CASCADE,
	album_art BYTEA,
	price DECIMAL,
	stock INT
);
ALTER SEQUENCE albums_id_seq RESTART WITH 1;
INSERT INTO "albums" ("name", artist_id, genre_id, type_id, price, stock)
VALUES ('New Levels New Devils', 1, 4, 1, 10.99, 10), ('See You On The Other Side', 2, 3, 3, 29.99, 3);

CREATE TABLE "cart" (
	"id" SERIAL PRIMARY KEY,
	user_id INT REFERENCES "user" ON DELETE CASCADE,
	album_id INT REFERENCES "albums" ON DELETE CASCADE
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

ALTER TABLE "albums"
ADD release_date DATE;

INSERT INTO "artists" ("name", founded, city, "state", country)
VALUES ('Abbath', 2015, 'Bergen', '', 'Norway'), ('AC/DC', 1973, 'Sydney', '', 'Australia'),
				('Black Sabbath', 1968, 'Birmingham', '', 'England'), ('Bongzilla', 1995, '', 'Wisconsin', 'United States'),
				('Cannibal Corpse', 1988, 'Buffalo', 'New York', 'United States'), ('With Iowa In Between', 2013, 'Minneapolis', 'Minnesota', 'United States'), 
				('Gwar', 1985, 'Richmond', 'Virginia', 'United States'), ('HIM', 1991, 'Helsinki', '', 'Finland'), 
				('Miles Davis', 1944, 'Alton', 'Illinois', 'United States'), ('Dizzy Gillespie', 1935, 'Cheraw', 'South Carolina', 'United States'), 
				('Beethoven', 1794, 'Bonn', '', 'Germany'), ('B.B. King', 1942, 'Itta Bena', 'Mississippi', 'United States'), 
				('Daft Punk', 1993, 'Paris', '', 'France'), ('Darude', 1997, 'Eura', '', 'Finland'), 
				('Touche Amore', 2007, 'Los Angeles', 'California', 'United States');

INSERT INTO "albums" ("name", artist_id, genre_id, type_id, price, stock, release_date)
VALUES ();
