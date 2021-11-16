import { Router } from 'express';
import { getConnection, getRepository } from 'typeorm';
import Content from '../models/Content';

const contentRouter = Router();

contentRouter.post('/', async (request, response) => {
    try {
        const repo = getRepository(Content);
        const res = await repo.save(request.body);
        await getConnection().queryResultCache?.remove(['listContent'])
        return response.status(201).json(res);
    } catch (err) {
        console.log('err.message :>> ', err.message)
    }
})

contentRouter.get('/', async (request, response) => {
    response.json(await getRepository(Content).find({cache: {id: 'listContent', milliseconds: 20000}}))
})

export default contentRouter;