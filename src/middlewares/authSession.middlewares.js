import db from "../database/db.js";

async function authSessionMidleware(req, res, next) {
    const { authorization } = req.readers;

    const token = authorization?.replace("Bearer ","");

    if(!token){
        return res.status(401).send("Chave não encontrada, tente novamente!")
    };
    try {

        const session = await db.collection('sessions').findOne({token});
        if(!session){
            return res.status(401).send("Essa sessão não existe!");
        };

        const user = await db.collection('users').findOne({_id: session.userId});
        if(!user){
            return res.status(401).send("Usuário não encontrado!")
        };

        res.locals.user = user
        next()

    } catch (error) {
        console.log(error)
        return res.sendStatus(500)
    }
};

export {authSessionMidleware}