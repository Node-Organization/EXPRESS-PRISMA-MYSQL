
import { Request, Response } from 'express';
import { prisma } from '../PrismaClient';

export class UpdateCategories{
    async handle(req: Request, res:Response){
        const { id }                = req.params;
        const { name, description } = req.body;

        try {
            const post = await prisma.categories.update({
                where: { 
                    id: id
                },
                data: {
                    name,
                    description
                },
            });    
            res.json(post);
        } catch (error) {
            res.json({ error: `Post with ID ${id} does not exist in the database` });
        }
    }
}