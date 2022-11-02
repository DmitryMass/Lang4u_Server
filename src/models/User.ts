import {
    Model,
    DataTypes,
    InferAttributes,
    InferCreationAttributes,
} from 'sequelize';
import seqDataBase from '../db';

export interface UserModel
    extends Model<
        InferAttributes<UserModel>,
        InferCreationAttributes<UserModel>
    > {
    id: string | number;
    email: string;
    password: string;
}

export const User = seqDataBase.define<UserModel>(
    'user',
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            unique: true,
            allowNull: false,
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
    {
        freezeTableName: true,
        timestamps: false,
    }
    // имя таблицы равно имени модели без каких-либо изменений (freezTableName)
);

// export const UserCourses = seqDataBase.define('user_course', {
//     id: {
//         type: DataTypes.INTEGER,
//         primaryKey: true,
//         autoIncrement: true,
//         allowNull: false,
//     },
// });
