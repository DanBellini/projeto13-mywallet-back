import { Router } from "express";
import { singInUser, registerUser } from "../controllers/auth.controllers.js";

const router = Router();

router.post('/singin', singInUser);
router.post('/register', registerUser);

export default router;