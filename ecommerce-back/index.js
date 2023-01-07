import express from 'express';
import 'dotenv/config'
import morgan from 'morgan';
import cors from 'cors'
import { connectToDb } from './models/db.js';
import appRouter from './routes/index.js';


const app = express();

app.use(express.json());
app.use(cors());
app.use(morgan('dev'));

app.use(appRouter);

const port = process.env.PORT || 8000;

connectToDb().then(() => {
    app.listen(port, () => console.log(`app is running on port ${port}`));
}).catch();
