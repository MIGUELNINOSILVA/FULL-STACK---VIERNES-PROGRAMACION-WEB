import getConnection from "../database/database.js";

const getUsuarios = async (req, res) => {
    try {
        const connection = await getConnection();
        const result = await connection.query(`
            SELECT id_usuario, nombre_usuario, telefono, cargo, correo_electronico FROM usuarios ORDER BY id_usuario ASC
        `);
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}

const getUsuario = async (req, res) => {
    try {
        const { id_usuario } = req.params;
        console.log("Parametros de getUsuario", req.params);
        const connection = await getConnection();
        const result = await connection.query(`
            SELECT id_usuario, nombre_usuario, cargo FROM usuarios WHERE id_usuario = ?
        `, id_usuario);
        console.log(result);
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}

const addUsuario = async (req, res) => {
    try {
        const {id_usuario} = req.body;
        const usuario = {id_usuario, nombre_usuario, telefono, cargo, correo_electronico};
        const connection = await getConnection();
        const result = await connection.query(`
            INSERT INTO usuarios SET ?
        `,usuario);
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}

const updateUsuario = async (req, res) => {
    try {
        const { id_usuario } = req.params;
        const { nombre_usuario } = req.body;
        const usuarios = {
            id_usuario,
            nombre_usuario
        };
        console.log("Entró aquí el objeto BODY",usuarios);
        console.log("Entró aquí el objeto PARAMS", id_usuario);
        const connection = await getConnection();
        const result = await connection.query(`
            UPDATE usuarios SET nombre_usuario = ? WHERE id_usuario = ? 
        `,[
            nombre_usuario,
            id_usuario,
        ]);
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}

const deleteUsuario = async (req, res)=>{
    try {
        const {id_usuario} = req.params;
        const connection = await getConnection();
        const result = await connection.query(`
            DELETE FROM usuarios WHERE id_usuario = ?
        `,id_usuario);
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}


const methodsHTTP = {
    getUsuarios,
    getUsuario,
    addUsuario,
    deleteUsuario,
    updateUsuario
}

export default methodsHTTP;
