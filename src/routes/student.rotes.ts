import { request, Router } from 'express';
import { getConnection, getRepository } from 'typeorm';
import Student from '../models/Student';
import { validate } from 'class-validator';

const studentRouter = Router();

studentRouter.post('/', async (request, response) => {
    try {
        const repo = getRepository(Student);
        const { key, name, email } = request.body;
        const student = repo.create({
            key,
            name,
            email,
        });
        const errors = await validate(student);
        if (errors.length == 0) {
            const res = await repo.save(student);
            await getConnection().queryResultCache?.remove(['listStudent'])
            return response.status(201).json(res);
        }
        return response.status(400).json(errors);
    } catch (err) {
        console.log('err.message :>> ', err.message);
        return response.status(400).send()
    }
})

studentRouter.get('/', async (request, response) => {
    response.json( await getRepository(Student).find({cache: {id: 'listStudent', milliseconds: 20000}}))
})

export default studentRouter;