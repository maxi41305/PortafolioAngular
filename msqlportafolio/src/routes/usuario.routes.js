'use strict'

import { Router } from "express";
import { methods as UsuarioController } from "./../controllers/usuario";
const router = Router();

// Rutas de prueba
//router.post('/datos-curso', ProveedorController.datosCurso);
//router.get('/test-de-controlador', ProveedorController.test);

// Rutas útiles
router.get("/usuario", UsuarioController.getUsuario);
router.get("/usuarios/:id", UsuarioController.getUsuarios);
router.post("/saveusuario", UsuarioController.addUsuario);
router.put("/:id", UsuarioController.updateUsuario);
router.delete("/eliminarusuario/:id", UsuarioController.deleteUsuario);

export default router;