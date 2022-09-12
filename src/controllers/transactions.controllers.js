import db from "../database/db.js";

async function transactionsUser(req,res){
    const { user } = res.locals;

    try {
        const historicOfTransactions = await db.collection('transactions').find({ userid: user._id }).toarray();
        
        res.status(200).send(historicOfTransactions)
    } catch (error) {
        console.log(error)
        return res.sendStatus(500)
    }
};

async function receiptMoney(req,res){

};

async function exitMoney(req,res){

};

export {transactionsUser, receiptMoney, exitMoney };