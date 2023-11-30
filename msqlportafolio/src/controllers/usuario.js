import { getConnection } from "./../database/database";

const getUsuario = async (req, res) => {
    try {
        const connection = await getConnection();
        const result = await connection.query("SELECT * from usuario");
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

const getUsuarios = async (req, res) => {
    try {
        const { id } = req.params;
        const connection = await getConnection();
        const result = await connection.query("SELECT * from usuario where dni  = ?", id);
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message); 
    }
};

const addUsuario = async (req, res) => {
    try {
        const {  dni, nombre, apellido, direccion, telefono, email, contrasenia, fecha_n } = req.body;

        if (dni === undefined || nombre === undefined || direccion === undefined || telefono === undefined || email === undefined || contrasenia === undefined || fecha_n === undefined) {
            res.status(400).json({ message: "Bad Request. Please fill all field." });
        }

        const usuario = {  dni, nombre, apellido, direccion, telefono, email, contrasenia, fecha_n } ;
        const connection = await getConnection();
        await connection.query("INSERT usuario SET ?", usuario);
        res.json({ message: "usuario added" });
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

const updateUsuario = async (req, res) => {
    try {
        const { dni } = req.params;
        const {  nombre, apellido, direccion, telefono, email, contrasenia, fecha_n } = req.body;

        if (dni === undefined || nombre === undefined || apellido === undefined || direccion === undefined || telefono === undefined || email === undefined || contrasenia === undefined || fecha_n === undefined) {
            res.status(400).json({ message: "Bad Request. Please fill all field." });
        }

        const usuario ={  nombre, apellido, direccion, telefono, email, contrasenia, fecha_n };
        const connection = await getConnection();
        const result = await connection.query("UPDATE usuario SET ? WHERE id = ?", [usuario, dni]);
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

const deleteUsuario = async (req, res) => {
    try {
        const { id } = req.params;
        const connection = await getConnection();
        const result = await connection.query("DELETE FROM usuario WHERE dni = ?", id);
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

export const methods = {
    getUsuario,
    getUsuarios,
    addUsuario,
    updateUsuario,
    deleteUsuario
};