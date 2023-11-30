'use strict'

import { Router } from "express";
import { methods as ProyectosController } from "./../controllers/proyectos";

const router = Router();

// Rutas de prueba
//router.post('/datos-curso', ProveedorController.datosCurso);
//router.get('/test-de-controlador', ProveedorController.test);

// Rutas útiles
router.get("/proyectos", ProyectosController.getProyectos);
router.get("/proyecto/:id", ProyectosController.getProyecto);
router.post("/saveproyecto", ProyectosController.addProyecto);
router.put("/:id", ProyectosController.updateProyecto);
router.delete("/eliminarproyecto/:id", ProyectosController.deleteProyecto);

export default router;