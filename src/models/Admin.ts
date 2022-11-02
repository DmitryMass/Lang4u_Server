// import {
//     Model,
//     DataTypes,
//     InferAttributes,
//     InferCreationAttributes,
// } from 'sequelize';

// import seqDataBase from '../db';

// interface ICourses
//     extends Model<
//         InferAttributes<ICourses>,
//         InferCreationAttributes<ICourses>
//     > {
//     id: string | number;
//     logo: string;
//     title: string;
//     duration: string;
//     modules: string;
//     details: string;
//     price: string;
//     color: string;
//     link: string;
//     lessons: string;
//     task: string;
//     tests: string;
//     expert: string;
// }

// export const Courses = seqDataBase.define<ICourses>(
//     'courses',
//     {
//         id: {
//             type: DataTypes.INTEGER,
//             primaryKey: true,
//             autoIncrement: true,
//             allowNull: false,
//         },
//         logo: {
//             type: DataTypes.TEXT,
//             allowNull: false,
//         },
//         title: {
//             type: DataTypes.TEXT,
//             allowNull: false,
//         },
//         duration: {
//             type: DataTypes.TEXT,
//             allowNull: false,
//         },
//         modules: {
//             type: DataTypes.TEXT,
//             allowNull: false,
//         },
//         details: {
//             type: DataTypes.TEXT,
//             allowNull: false,
//         },
//         price: {
//             type: DataTypes.TEXT,
//             allowNull: false,
//         },
//         color: {
//             type: DataTypes.TEXT,
//             allowNull: false,
//         },
//         link: {
//             type: DataTypes.TEXT,
//             allowNull: false,
//         },
//         lessons: {
//             type: DataTypes.TEXT,
//             allowNull: false,
//         },
//         task: {
//             type: DataTypes.TEXT,
//             allowNull: false,
//         },
//         tests: {
//             type: DataTypes.TEXT,
//             allowNull: false,
//         },
//         expert: {
//             type: DataTypes.TEXT,
//             allowNull: false,
//         },
//     },
//     {
//         freezeTableName: true,
//         timestamps: false,
//     }
// );
