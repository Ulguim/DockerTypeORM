import { Router } from 'express';
import classRouter from './class.routes';
// import testeRouter from './college.routes';
import lessonRouter from './lesson.routes';
import studentRouter from './student.rotes';
import contentRouter from './conten.routes';


const routes = Router();

routes.use('/class', classRouter);
// routes.use('/college', collegeRouter);
routes.use('/lesson', lessonRouter);
routes.use('/student',studentRouter);
routes.use('/content',contentRouter);


export default routes;
