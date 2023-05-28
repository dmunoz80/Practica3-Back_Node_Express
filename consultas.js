const { Pool } = require('pg');

const pool = new Pool ({
    host: 'localhost',
    user: 'postgres',
    password: '******',
    database: 'likeme',
    allowExitOnIdle: true
});

const post_agregar = async (titulo, img, descripcion, likes) => {
    const consulta = "INSERT INTO posts VALUES (DEFAULT, $1, $2, $3, $4)"
    const values = [titulo, img, descripcion, likes]
    const result = await pool.query(consulta, values)
    return "Post agregado exitosamente!!"
}

const post_obtener = async () => {
    const { rows } = await pool.query("SELECT * FROM posts")
    return rows
}

module.exports = {
    post_agregar,
    post_obtener
}