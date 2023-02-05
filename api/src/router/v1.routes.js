import { Router } from "express";
import { getAscii,postAscii } from "../controllers/ascii.controller.js";
const router = Router()

router.get('/ascii',getAscii)
router.post('/ascii',postAscii)

export default router