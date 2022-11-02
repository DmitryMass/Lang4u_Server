import * as dotenv from 'dotenv';
dotenv.config();
import { RequestHandler } from 'express';
import { Course } from '../models/Course';
// import { validationResult } from 'express-validator';

interface ICourse {
    id: string | number;
    logo: string;
    title: string;
    duration: string;
    modules: string;
    details: string;
    price: string;
    color: string;
    link: string;
    lessons: string;
    task: string;
    tests: string;
    expert: string;
}

export const getCourse: RequestHandler = async (req, res) => {
    try {
        const course = await Course.findAll();
        if (course) {
            return res.status(200).send(course);
        }
    } catch (e) {
        return res
            .status(404)
            .send({ message: 'Не вдалося отримати список курсів' });
    }
};

export const createCourse: RequestHandler = async (req, res) => {
    try {
        const body = req.body as ICourse;
        const course = await Course.create({
            ...body,
        });
        course.save();
        return res.status(200).send({ message: 'Курс створений' });
    } catch (e) {
        return res.status(404).send({ message: 'Не вдалося створити курс' });
    }
};

export const deleteCourse: RequestHandler = async (req, res) => {
    try {
        const {
            params: { id },
        } = req;
        const course = await Course.findOne({ where: { id } });

        if (course) {
            await course.destroy();
            await course.save();
            return res.status(200).send({ message: 'Курс видалений' });
        }
    } catch (e) {
        return res.status(404).send({ message: 'Не вдалося видалити курс' });
    }
};
