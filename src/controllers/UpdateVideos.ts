
import { Request, Response } from 'express';
import { prisma } from '../PrismaClient';

export class UpdateVideos{
    async handle(req: Request, res:Response){
        const { id }                          = req.params;
        const { name, description, duration } = req.body;

        try {
            const post = await prisma.videos.update({
                where: { 
                    id: id
                },
                data: {
                    name,
                    description,
                    duration
                },
            });    
            res.json(post);
        } catch (error) {
            res.status(400).end();
        }
    }
}