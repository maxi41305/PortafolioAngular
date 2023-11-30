import { getConnection } from "./../database/database";

const getProyectos = async (req, res) => {
    try {
        const connection = await getConnection();
        const result = await connection.query("SELECT * FROM proyectos JOIN imagen WHERE imagen=id_imagen");
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

const getProyecto = async (req, res) => {
    try {
        const { id } = req.params;
        const connection = await getConnection();
        const result = await connection.query("SELECT * from proyectos JOIN imagen WHERE imagen=id_imagen and id_proyecto = ?", id);
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message); 
    }
};

const addProyecto = async (req, res) => {
    try {
        const {  nombre, descripcion, imagen } = req.body;

        if ( nombre === undefined || descripcion === undefined|| imagen === undefined  ) {
            res.status(400).json({ message: "Bad Request. Please fill all field." });
        }

        const proyectos = {  nombre, descripcion, imagen };
        const connection = await getConnection();
        await connection.query("INSERT proyectos SET ?", proyectos);
        res.json({ message: "proyectos added" });
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

const updateProyecto = async (req, res) => {
    try {
        const { id } = req.params;
        const  {  nombre, descripcion } = req.body;

        if (id_proyecto === undefined || nombre === undefined || descripcion === undefined ){
            res.status(400).json({ message: "Bad Request. Please fill all field." });
        }

        const proyectos ={  nombre, descripcion };
        const connection = await getConnection();
        const result = await connection.query("UPDATE proyectos SET ? WHERE id = ?", [proyectos, id]);
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

const deleteProyecto = async (req, res) => {
    try {
        const { id } = req.params;
        const connection = await getConnection();
        const result = await connection.query("DELETE FROM proyectos WHERE id_proyecto = ?", id);
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

export const methods = {
    getProyectos,
    getProyecto,
    addProyecto,
    updateProyecto,
    deleteProyecto
};