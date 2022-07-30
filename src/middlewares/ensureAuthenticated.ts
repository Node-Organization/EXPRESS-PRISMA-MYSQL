
import { NextFunction, Request, Response } from "express";
import { verify } from 'jsonwebtoken';

interface IPayload{
    sub: String;
}

export function ensureAuthenticated(req: Request, res: Response, next: NextFunction){

    const authToken = req.headers.authorization;

    if(!authToken){
        res.status(400).end();
    }

    const [ bearer, token ] = authToken.split(" ");

    try {
        const result = verify(token, "45465446f5d65465fdfdf54654f6d46") as IPayload;
        console.log(result);
        req.user_id = result.sub;
        return next();
    } catch (err) {
        res.status(400).end();
    }
}