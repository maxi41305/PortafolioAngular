'use strict'

import { Router } from "express";
import { methods as ContactameController } from "./../controllers/contactame";
const router = Router();

// Rutas de prueba
//router.post('/datos-curso', ProveedorController.datosCurso);
//router.get('/test-de-controlador', ProveedorController.test);

// Rutas útiles
router.get("/contactame", ContactameController.getContactame);
router.get("/contactames/:id", ContactameController.getContactames);
router.post("/savecontactame", ContactameController.addContactame);
//router.put("/:id", ContactameController.updateContactame);
router.delete("/eliminarcontactame/:id", ContactameController.deleteContactame);

export default router;