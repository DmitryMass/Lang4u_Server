import {
    Model,
    DataTypes,
    InferAttributes,
    InferCreationAttributes,
    CreationOptional,
} from 'sequelize';
import seqDataBase from '../db';

export interface ISupportModel extends Model<any, any> {
    id: string | number;
    name: string;
    email: string;
    message: string;
}

export const Support = seqDataBase.define<ISupportModel>(
    'support',
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        message: {
            type: DataTypes.STRING,
            allowNull: true,
        },
    },
    {
        freezeTableName: true,
        timestamps: false,
    }
);
