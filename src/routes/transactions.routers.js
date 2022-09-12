import { Router } from "express";
import { transactionsUser, addTransaction } from "../controllers/transactions.controllers.js"
import { authSessionMidleware } from "../middlewares/authSession.middlewares.js"

const router = Router();

router.get('/transactions', authSessionMidleware, transactionsUser);
router.post('/transactions', authSessionMidleware, addTransaction);


export default router;