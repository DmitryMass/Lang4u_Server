import { Sequelize } from 'sequelize';
import * as dotenv from 'dotenv';
dotenv.config();

// local
// const { DATABASE } = process.env;

// const seqDataBase = new Sequelize('lang4u', 'postgres', 'postgres', {
//     dialect: 'postgres',
//     host: 'localhost',
//     port: 5432,
// });

// heroku server postgresql
const { DATABASE_URL } = process.env;
const seqDataBase = new Sequelize(DATABASE_URL!, {
    dialectOptions: {
        ssl: {
            require: true,
            rejectUnauthorized: false,
        },
    },
});

export default seqDataBase;
