import express from 'express';
import cors from 'cors';
import authRouter from "./routes/auth.routers.js"

const app = express();

app.use(cors());
app.use(express.json());

app.use(authRouter);

app.listen(4000, () => console.log("Listening on port 4000"))