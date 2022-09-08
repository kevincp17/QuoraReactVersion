import { Router } from "express";
import indexController from "../controllers/indexController";

const router=new Router()

router.get('/',indexController.SpaceController.findAll)
router.get('/:id',indexController.SpaceController.findOne)
router.post('/',indexController.SpaceController.create)

export default router