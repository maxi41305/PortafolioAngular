'use strict'

import { Router } from "express";

const router = Router();

// Rutas de prueba
//router.post('/datos-curso', ProveedorController.datosCurso);
//router.get('/test-de-controlador', ProveedorController.test);

// Rutas útiles

const imagesController = require("../controllers/imagenes");

router.post(
  "/images/:tabla",
  imagesController.upload,
  imagesController.uploadFile
);
export default router;