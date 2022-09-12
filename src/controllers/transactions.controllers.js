import db from "../database/db.js";
import { transactionSchema } from "../schemas/transaction.schema.js"
import dayjs from "dayjs";

async function transactionsUser(req,res){
    const { user } = res.locals;
    

    try {
        const historicOfTransactions = await db.collection('transactions').find({ userId: user._id }).toArray();

        return res.status(200).send(historicOfTransactions)
    } catch (error) {
        console.log(error)
        res.sendStatus(500)
    }
};

async function addTransaction (req,res){
    const { value, description, type } = req.body;
    const { user } = res.locals

    const validation = transactionSchema.validate({ value, description, type});

    if(validation.error){
        return res.sendStatus(422)
    };

    try {
        await db.collection('transactions').insertOne({
            value, 
            description, 
            type, 
            userId: user._id, 
            date:dayjs().format('DD/MM')
        }
        )
        res.sendStatus(201);

    } catch (error) {
        console.log(error)
        res.sendStatus(500)
    }
};

export {transactionsUser, addTransaction };