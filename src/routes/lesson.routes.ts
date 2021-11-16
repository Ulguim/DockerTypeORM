import { request, Router } from 'express';
import { getConnection, getRepository } from 'typeorm';
import Lesson from '../models/lesson';

const lessonRouter = Router();

lessonRouter.post('/', async (request, response) => {
    try {
        const repo = getRepository(Lesson);
        const res = await repo.save(request.body);
        await getConnection().queryResultCache?.remove(['listLesson'])
        return response.status(201).json(res)
    } catch (err) {
        console.log('err.message :>> ',err.message);
        
    }
})

lessonRouter.get('/', async (request, response) => {
    response.json( await getRepository(Lesson).find({cache: {id: 'listLesson', milliseconds: 20000}}))
})

export default lessonRouter;