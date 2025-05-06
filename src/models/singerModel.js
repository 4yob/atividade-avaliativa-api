const pool = require("../config/database");

const getSingers = async () => {
    const result = await pool.query(
        `   SELECT singers.*, musics.name AS music_name
            FROM singers
            LEFT JOIN musics ON singers.music_id = musics.id
        `
    );
    return result.rows;
};

const getSingerById = async (id) => {
    const result = await pool.query(
        `   SELECT singers.*, musics.name AS music_name
            FROM singers
            LEFT JOIN musics ON singers.music_id = musics.id
            WHERE singers.id = $1
        `, [id]
    );
    return result.rows[0];
};

const createSinger = async (name, age, music_id) => {
    const result = await pool.query(
        `   INSERT INTO singers (name, age, music_id)
            VALUES ($1, $2)
            RETURNING *
        `, [name, age, music_id]	
    );
    return result.rows[0];
};

const updateSinger = async (id, name, age, music_id) => {
    const result = await pool.query(
        `   UPDATE singers
            SET name = $1,
            age = $2,
            music_id = $3
            WHERE id = $4
            RETURNING *
        `, [name, age, music_id, id]
    );
    return result.rows[0];
};

const deleteSinger = async (id) => {
    const result = await pool.query(
        `   DELETE FROM singers
            WHERE id = $1
            RETURNING *
        `, [id]
    );
    return { message: `Cantor de id ${id} deletado com sucesso.`};
};

module.exports = { getSingers, getSingerById, createSinger, updateSinger, deleteSinger };