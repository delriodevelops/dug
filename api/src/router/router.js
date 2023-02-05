import { Router } from "express";
import { homeController } from "../controllers/home.controller.js";
import v1Routes from './v1.routes.js'
const router = Router()

router.get('/',homeController)

router.use('/api/v1',v1Routes)

export default router