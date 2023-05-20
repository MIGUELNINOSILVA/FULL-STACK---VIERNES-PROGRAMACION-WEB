import { Router } from "express";
import controlador1 from "./../controller/controller1.js";
const router = Router();

// get ruta para obtener todos los campos
router.get("/", controlador1.getUsuarios);
// get ruta para obtener un solo campo
router.get("/:id_usuario", controlador1.getUsuario);

//Post ruta para agreagar un nuevo usuario
router.post("/", controlador1.addUsuario); 

//Put patra actualizar un campo
router.put("/:id_usuario", controlador1.updateUsuario);

//delete ruta para eliminar un usuario
router.delete("/:id_usuario", controlador1.deleteUsuario);


export default router;