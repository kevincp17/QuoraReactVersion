import { Router } from "express";
import indexController from "../controllers/indexController";

const router=new Router()

router.get('/',indexController.AnswerController.findAll)
router.get('/:id',indexController.AnswerController.findOne)
router.post('/',indexController.AnswerController.create)

export default router