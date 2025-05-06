CREATE TABLE musics (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) UNIQUE NOT NULL,
    duration DECIMAL(10,2),
    singer_id INTEGER REFERENCES singers(id) ON DELETE SET NULL
);

CREATE TABLE singers (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    age INTEGER,
    genre VARCHAR(50)
);

INSERT INTO musics (name, duration, singer_id) VALUES
    ('California Love', 4.45, 1),
    ('Déjà Vu', 4.00, 2),
    ('Halo', 4.21, 2),
    ('HUMBLE.', 2.57, 4),
    ('All Eyez on Me', 4.38, 1),
    ('Crazy in Love', 3.56, 2),
    ('Born This Way', 4.20, 3),
    ('Formation', 3.26, 2),
    ('LoveGame', 4.22, 3),
    ('Bad Romance', 4.55, 3),
    ('DNA.', 3.06, 4),
    ('Poker Face', 3.58, 3),
    ('Swimming Pools', 3.52, 4);

INSERT INTO singers (name, age, genre) VALUES
    ('Tupac', 25, 'Rap'),
    ('Beyoncé', 44, 'Pop'),
    ('Lady Gaga', 39, 'Pop'),
    ('Kendrick Lamar', 37, 'Rap');