import { NextFunction, Request, Response } from "express";
import { prisma } from "../PrismaClient";


export async function ensureAdmin(req: Request, res: Response, next: NextFunction){
    const { user_id } = req;

    const { admin } = await prisma.user.findUnique({
        where: {
            id: user_id
        }
    });

    if(admin){
        return next();
    }

    res.status(400).end();
}