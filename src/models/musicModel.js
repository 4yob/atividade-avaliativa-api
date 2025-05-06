const pool = require("../config/database");

const getMusics = async (duration) => {
    if(!duration) {
        //Se não houver duração, retorne todos as músicas
        const result = await pool.query("SELECT * FROM musics");
        return result.rows;
    } else if(duration) {
        //Se houver duração, retorne as músicas que possuem a duração maior ou igual a duração passada
        const result = await pool.query("SELECT * FROM musics WHERE duration >= $1", [duration]);
        return result.rows;
    } else {
        //Se houver duração, retorne as músicas que possuem a duração menor ou igual a duração passada
        const result = await pool.query("SELECT * FROM musics WHERE duration <= $1", [duration]);
        return result.rows;
    }
};

const getMusicById = async (id) => {
    const result = await pool.query("SELECT * FROM musics WHERE id = $1", [id]);
    return result.rows[0];
};

const createMusic = async (name, duration, photo) => {
    const result = await pool.query("INSERT INTO musics (name, duration, photo) VALUES ($1, $2, $3) RETURNING *", [name, duration, photo]);
    return result.rows[0];
};

const updateMusic = async (id, name, duration) => {
    const result = await pool.query("UPDATE musics SET name = $1, duration = $2 WHERE id = $3 RETURNING *", [name, duration, id]);
    return result.rows[0];
};

const deleteMusic = async (id) => {
    const result = await pool.query("DELETE FROM musics WHERE id = $1 RETURNING *", [id]);
    return { message: `Música de id ${id} deletada com sucesso.`};
};

module.exports = { getMusics, getMusicById, createMusic, updateMusic, deleteMusic };