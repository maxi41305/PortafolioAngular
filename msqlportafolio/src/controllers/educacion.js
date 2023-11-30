import { getConnection } from "./../database/database";

const getEducacion = async (req, res) => {
    try {
        const connection = await getConnection();
        const result = await connection.query("SELECT * FROM educacion JOIN imagen WHERE imagen=id_imagen");
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

const getEducaciones = async (req, res) => {
    try {
        const { id } = req.params;
        const connection = await getConnection();
        const result = await connection.query("SELECT * from educacion JOIN imagen WHERE imagen=id_imagen and id_educacion  = ?", id);
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message); 
    }
};

const addEducacion = async (req, res) => {
    try {
        const {  nombre, descripcion, instituto, imagen } = req.body;

        if ( nombre === undefined || descripcion === undefined || instituto === undefined || imagen === undefined) {
            res.status(400).json({ message: "Bad Request. Please fill all field." });
        }

        const educacion = {  nombre, descripcion, instituto, imagen };
        const connection = await getConnection();
        await connection.query("INSERT educacion SET ?", educacion);
        res.json({ message: "educacion added" });
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

const updateEducacion = async (req, res) => {
    try {
        const { id } = req.params;
        const  {  nombre, descripcion, instituto, imagen } = req.body;

        if (id === undefined || name === undefined || programmers === undefined) {
            res.status(400).json({ message: "Bad Request. Please fill all field." });
        }

        const educacion =  {  nombre, descripcion, instituto, imagen };
        const connection = await getConnection();
        const result = await connection.query("UPDATE educacion SET ? WHERE id = ?", [educacion, id]);
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

const deleteEducacion = async (req, res) => {
    try {
        const { id } = req.params;
        const connection = await getConnection();
        const result = await connection.query("DELETE FROM educacion WHERE id_educacion = ?", id);
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

export const methods = {
    getEducacion,
    getEducaciones,
    addEducacion,
    updateEducacion,
    deleteEducacion
};