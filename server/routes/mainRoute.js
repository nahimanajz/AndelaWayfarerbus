 import express from 'express';

import usersController from "../controllers/userController";

const router = express.Router();

router.post('/auth/signup', usersController.createAccount);
router.post('/auth/signin', usersController.userSignin);
 
export default router;
