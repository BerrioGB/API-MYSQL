import { Router } from "express";
import { getRrhh, updateRrhh, deleteRrhh, getRrhhs, createRrhh } from "../controllers/rrhh.controller.js";
const router = Router()

router.get('/rrhh', getRrhh)

router.get('/rrhh/:cedula', getRrhhs)

router.post('/rrhh', createRrhh)

router.put('/rrhh/:cedula', updateRrhh)

router.delete('/rrhh/:cedula', deleteRrhh)

export default router