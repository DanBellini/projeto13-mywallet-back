import {MongoClient} from "mongodb";
import dotenv from "dotenv";

dotenv.config()

const mongoClient = new MongoClient(process.env.MONGO_URI);

let db;

try {
    await mongoClient.connect();
    db = mongoClient.db("MyWallet");
    console.log("Banco de dados conectado")
} catch (error) {
    console.log(error)
}

export default db;