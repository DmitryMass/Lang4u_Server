import * as dotenv from 'dotenv';
dotenv.config();
import fileUpload from 'express-fileupload';
import router from './routes/router';
import bodyParser from 'body-parser';
import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';

import { errorHandler } from './middleware/errorHandler';
import seqDataBase from './db';

const { PORT } = process.env;

const app = express();

app.use(fileUpload());
app.use(cookieParser());
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api', router);
app.use('/', async (req, res) => {
    console.log('hello');
    return res.status(200).send({ message: 'Ok' });
});
app.use(errorHandler);

const start = async () => {
    try {
        seqDataBase.authenticate();
        seqDataBase.sync();
        app.listen(Number(PORT) || 3005, '0.0.0.0', () => {
            console.log(`Server on port ${PORT}`);
        });
    } catch (e) {
        console.log(e);
    }
};

start();
