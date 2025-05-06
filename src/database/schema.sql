CREATE TABLE musics (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) UNIQUE NOT NULL,
    duration INTEGER,
    singer_id INTEGER REFERENCES singers(id) ON DELETE SET NULL
);

CREATE TABLE singers (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    age INTEGER,
    genre VARCHAR(50)
);

INSERT INTO musics (name, duration, singer_id) VALUES
    ('California Love', 240, 1),
    ('Déjà Vu', 240, 2),
    ('Halo', 240, 2),
    ('HUMBLE.', 120, 4),
    ('All Eyez on Me', 240, 1),
    ('Crazy in Love', 180, 2),
    ('Born This Way', 240, 3),
    ('Formation', 180, 2),
    ('LoveGame', 240, 3),
    ('Bad Romance', 240, 3),
    ('DNA.', 180, 4),
    ('Poker Face', 180, 3),
    ('Swimming Pools', 180, 4);

INSERT INTO singers (name, age, genre) VALUES
    ('Tupac', 25, 'Rap'),
    ('Beyoncé', 44, 'Pop'),
    ('Lady Gaga', 39, 'Pop'),
    ('Kendrick Lamar', 37, 'Rap');