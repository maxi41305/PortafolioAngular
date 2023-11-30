const multer = require("multer");
const path = require("path");
const fs = require("fs");
import { getConnection } from "./../database/database";
import { readFileSync } from 'node:fs';

const storage = multer.diskStorage({
  destination: path.join(__dirname, "../../public/images/"),
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

const upload = multer({ storage: storage });

exports.upload = upload.single("image");

exports.uploadFile = async (req, res) => {
 

    const tipo = req.file.mimetype;
    const ruta = req.file.originalname;
    const date = ( path.join("public/images/" + req.file.filename) );
    const connection = await getConnection();
    await connection.query(
      "INSERT INTO " + req.params.tabla + " set ?",
      [{ tipo, ruta, date }],
      (err, rows) => {
        console.log(
          err
            ? "Err INSERT INTO " + req.params.tabla + " " + err
            : req.params.tabla + ": Image added!"
        );
        res.json(
          err
            ? { err: "Error al cargar la imagen" }
            : { msg: "Imagen cargada satisfactoriamente" }
        );
      }
    );
    


};
