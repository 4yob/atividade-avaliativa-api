CREATE TABLE musics (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) UNIQUE NOT NULL,
    duration DECIMAL(10,2)
);

CREATE TABLE singers (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    age INTEGER,
    music_id INTEGER REFERENCES musics(id) ON DELETE SET NULL
);

INSERT INTO musics (name, duration) VALUES
    ('California Love', 4.45),
    ('Déjà Vu', 4.00),
    ('Poker Face', 3.58),
    ('Swimming Pools', 3.52);

INSERT INTO singers (name, age, music_id) VALUES
    ('Tupac', 25, 1),
    ('Beyoncé', 44, 2),
    ('Lady Gaga', 39, 3),
    ('Tupac', 37, 4);