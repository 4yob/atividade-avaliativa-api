CREATE TABLE musics (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) UNIQUE NOT NULL,
    duration DECIMAL(10,2),
    photo TEXT
);

CREATE TABLE singers (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    age INTEGER,
    music_id INTEGER REFERENCES musics(id) ON DELETE SET NULL
);

INSERT INTO musics (name, duration, photo) VALUES
    ('California Love', 4.45, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUE7d-ZXh7YoU-yPHxrj7HG589mhjDEzGV9w&s'),
    ('Déjà Vu', 4.00, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLSnSWxo9vWG6glajXu_WGDwDAY7KnRUhMmQ&s'),
    ('Poker Face', 3.58, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBjti4aYhaEld-bx9axhT9R14P0BwhAkcqyA&s'),
    ('Swimming Pools', 3.52, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_RyH5LcVFG7BRXelkNPjo1FiVYexZiUV38g&s');

INSERT INTO singers (name, age, music_id) VALUES
    ('Tupac', 25, 1),
    ('Beyoncé', 44, 2),
    ('Lady Gaga', 39, 3),
    ('Tupac', 37, 4);