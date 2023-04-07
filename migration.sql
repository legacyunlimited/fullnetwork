DROP TABLE IF EXISTS artists;
DROP TABLE IF EXISTS album;

CREATE TABLE artists (
    id serial PRIMARY KEY,
    record_label_id int,
    name VARCHAR(70)
);

CREATE TABLE album (
    id serial PRIMARY KEY,
    artist_id int,
    name VARCHAR(50),
    year int
);