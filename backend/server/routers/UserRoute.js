import { Router } from "express";
import indexController from "../controllers/indexController";
import verifyToken from '../../middleware/verifyToken'

const router=new Router()

router.get('/users',verifyToken.verifyToken, indexController.UserController.getUsers);
router.get('/users/:email',indexController.UserController.findOneUser);
router.post('/users', indexController.UserController.Register);
router.post('/login', indexController.UserController.Login);
router.get('/token', indexController.RefreshTokenController.refreshToken);
router.delete('/logout', indexController.UserController.Logout);

export default router