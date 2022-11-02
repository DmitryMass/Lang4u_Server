import { Request, Response, Router } from 'express';
import multer from 'multer';
import { login, registration } from '../controllers/auth';
import { createCourse, deleteCourse, getCourse } from '../controllers/courses';
import {
    loginValidator,
    registerValidator,
} from '../validationScheme/authValidation';

const upload = multer(); // formdat
const router = Router();

router.post('/registration', registerValidator, registration);
router.post('/login', loginValidator, login);
router.delete('/logout', async (req: Request, res: Response) => {
    return res.status(200).send({ message: 'Ok' });
});

// Courses Route
router.get('/course/', getCourse);
router.post('/course', createCourse);
// router.put('/course/:id', editCourse);
router.delete('/course/:id', deleteCourse);

export default router;
