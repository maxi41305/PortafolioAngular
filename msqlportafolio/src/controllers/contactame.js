import { getConnection } from "./../database/database";

const getContactame = async (req, res) => {
    try {
        const connection = await getConnection();
        const result = await connection.query("SELECT id_contactame, nombre, email, telefono, asunto, mensaje FROM contactame");
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

const getContactames = async (req, res) => {
    try {
        const { id } = req.params;
        const connection = await getConnection();
        const result = await connection.query("SELECT id_contactame, nombre, email, telefono, asunto, mensaje FROM contactame WHERE id_contactame = ?", id);
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message); 
    }
};

const addContactame = async (req, res) => {
    try {
        const {  nombre, email, telefono, asunto, mensaje } = req.body;

        if (nombre === undefined || email === undefined || telefono === undefined || asunto === undefined || mensaje === undefined) {
            res.status(400).json({ message: "Bad Request. Please fill all field." });
        }

        const contactame ={  nombre, email, telefono, asunto, mensaje };
        const connection = await getConnection();
        await connection.query("INSERT INTO contactame SET ?", contactame);
        res.json({ message: "contactame added" });
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};
const deleteContactame = async (req, res) => {
    try {
        const { id } = req.params;
        const connection = await getConnection();
        const result = await connection.query("DELETE FROM contactame WHERE id_contactame = ?", id);
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

export const methods = {
    getContactame,
    getContactames,
    addContactame,
    deleteContactame
};
