const pool = require("../config/database");

const getMusics = async (duration) => {
    if (!duration) {
        console.log("Sem duração, retornando todas as músicas.");
        //Se não houver duração, retorna todas as músicas
        const result = await pool.query(
            `SELECT musics.*, singers.name AS singer_name
            FROM musics
            LEFT JOIN singers ON musics.singer_id = singers.id
            `
        );
        return result.rows;
    } else {
        console.log("Com duração, filtrando músicas.", duration);
        //Se tiver duração, faça o filtro
        const result = await pool.query(
            `   SELECT musics.*, singers.name AS singer_name
                FROM musics
                LEFT JOIN singers ON musics.singer_id = singers.id
                WHERE musics.duration >= $1
            `,
            [`${duration}`]
        );
        return result.rows;
    }
};

const getMusicById = async (id) => {
    const result = await pool.query(
        `SELECT musics.*, singers.name AS singer_name 
        FROM musics
        LEFT JOIN singers ON musics.singer_id = singers.id
        WHERE musics.id = $1`,
        [id]
    );
    return result.rows[0];
};

const createMusic = async (name, duration, singer_id, photo) => {
    const result = await pool.query(
        "INSERT INTO musics (name, duration, singer_id, photo) VALUES ($1, $2, $3, $4) RETURNING *",
        [name, duration, singer_id, photo]
    );
    return result.rows[0];
};

const updateMusic = async (id, name, duration, singer_id) => {
    const result = await pool.query(
        "UPDATE musics SET name = $1, duration = $2, singer_id = $3 WHERE id = $4 RETURNING *",
        [name, duration, singer_id, id]
    );
    return result.rows[0];
};

const deleteMusic = async (id) => {
    const result = await pool.query(
        "DELETE FROM musics WHERE id = $1 RETURNING *",
        [id]
    );
    return { message: `Herói de id ${id} deletado com sucesso.` };
};

module.exports = {
    getMusics,
    getMusicById,
    createMusic,
    updateMusic,
    deleteMusic,
};
