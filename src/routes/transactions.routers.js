import { Router } from "express";
import {transactionsUser, receiptMoney, exitMoney } from "../controllers/transactions.controllers.js"
import { authSessionMidleware } from "../middlewares/authSession.middlewares.js"

const router = Router();

router.get('/transactions', authSessionMidleware, transactionsUser);
router.post('/receipt', authSessionMidleware, receiptMoney);
router.post('/exit', authSessionMidleware, exitMoney);

export default router;