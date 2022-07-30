
import { Request, Response } from 'express';
import { prisma } from '../PrismaClient';

export class DeleteVideos{
    async handle(req: Request, res:Response){
        const { id } = req.params;

        try {
            const post = await prisma.videos.delete({
                where: {
                  id: id
                },
            });
            res.status(204).end();
        } catch (error) {
            res.status(400).end();
        }
    }
}