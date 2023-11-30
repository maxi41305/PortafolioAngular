'use strict'

import { Router } from "express";
import { methods as EducacionController } from "./../controllers/educacion";

const router = Router();

// Rutas de prueba
//router.post('/datos-curso', ProveedorController.datosCurso);
//router.get('/test-de-controlador', ProveedorController.test);

// Rutas útiles
router.get("/educacion", EducacionController.getEducacion);
router.get("/educaciones/:id", EducacionController.getEducaciones);
router.post("/saveeducacion", EducacionController.addEducacion);
router.put("/:id", EducacionController.updateEducacion);
router.delete("/eliminareducacion/:id", EducacionController.deleteEducacion);

export default router;