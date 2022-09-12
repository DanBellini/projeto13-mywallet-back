import db from "../database/db.js";

async function authSessionMidleware(req, res, next) {
    const { authorization } = req.headers;

    const token = authorization?.replace("Bearer ","");

    if(!token){
        return res.status(401).send("Chave não encontrada, tente novamente!")
    };
    try {
        const session = await db.collection('sessions').findOne({token: token});

        if(!session){
            return res.status(401).send("Essa sessão não existe!");
        };

        const userId = await db.collection('users').findOne({_id: session.user});

        if(!userId){
            return res.status(401).send("Usuário não encontrado!")
        };

        res.locals.user = userId
        next()


    } catch (error) {
        console.log(error)
        return res.sendStatus(500)
    }
};

export {authSessionMidleware}