const pool = require("../config/database");

const getMusics = async (duration) => {
    if(!duration) {
        //Se não houver duração, retorne todos as músicas
        const result = await pool.query("SELECT * FROM musics");
        return result.rows;
    } else {
        //Se houver duração, faça o filtro
        const result = await pool.query(
            "SELECT * FROM musics WHERE CAST(musics.duration AS TEXT) ILIKE $1",
            [`%${duration.trim()}%`]);
           return result.rows;
    }
};

const getMusicById = async (id) => {
    const result = await pool.query("SELECT * FROM musics WHERE id = $1", [id]);
    return result.rows[0];
};

const createMusic = async (name, duration, singer_id, photo) => {
    const result = await pool.query("INSERT INTO musics (name, duration, singer_id, photo) VALUES ($1, $2, $3, $4) RETURNING *", [name, duration, singer_id, photo]);
    return result.rows[0];
};

const updateMusic = async (id, name, duration, singer_id) => {
    const result = await pool.query("UPDATE musics SET name = $1, duration = $2, singer_id = $3 WHERE id = $4 RETURNING *", [name, duration, singer_id, id]);
    return result.rows[0];
};

const deleteMusic = async (id) => {
    const result = await pool.query("DELETE FROM musics WHERE id = $1 RETURNING *", [id]);
    return { message: `Música de id ${id} deletada com sucesso.`};
};

module.exports = { getMusics, getMusicById, createMusic, updateMusic, deleteMusic };