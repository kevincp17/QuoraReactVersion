import { Router } from "express";
import uploadDownload from "../../middleware/uploadDownload";

const router=new Router()
router.get('/:filename',uploadDownload.showFile)

export default router