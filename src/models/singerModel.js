const pool = require("../config/database");

const getSingers = async () => {
    const result = await pool.query("SELECT * FROM singers");
    return result.rows;
};

const getSingerById = async (id) => {
    const result = await pool.query("SELECT * FROM singers WHERE id = $1", [id]);
    return result.rows[0];
};

const createSinger = async (name, age, genre) => {
    const result = await pool.query(
        "INSERT INTO singers (name, age, genre) VALUES ($1, $2, $3) RETURNING *",
        [name, age, genre]
    );
    return result.rows[0];
};

const updateSinger = async (id, name, age, genre) => {
    const result = await pool.query(
        "UPDATE singers SET name = $1, age = $2, genre = $3 WHERE id = $4 RETURNING *",
        [name, age, genre, id]
    );
    return result.rows[0];
};

const deleteSinger = async (id) => {
    const result = await pool.query("DELETE FROM singers WHERE id = $1 RETURNING *", [id]);

    return { message: `Cantor de id ${id} deletado com sucesso.` };
}

module.exports = { getSingers, getSingerById, createSinger, updateSinger, deleteSinger };