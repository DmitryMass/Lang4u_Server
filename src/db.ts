import { Sequelize } from 'sequelize';
import * as dotenv from 'dotenv';
dotenv.config();

const { DATABASE } = process.env;

const seqDataBase = new Sequelize('lang4u', 'postgres', 'postgres', {
    dialect: 'postgres',
    host: 'localhost',
    port: 5432,
    // dialectOptions: {
    //     ssl: {
    //         require: true,
    //         rejectUnauthorized: false,
    //     },
    // },
});

export default seqDataBase;
