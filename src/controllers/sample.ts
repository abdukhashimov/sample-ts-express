import { NextFunction, Request, Response } from "express"

export class SampleController {

    async create(req: Request, res: Response, next: NextFunction) {}

    async update(req: Request, res: Response, next: NextFunction) {}

    async find(req: Request, res: Response, next: NextFunction) {
        throw new Error("not implemented yet")
    }

    async get(req: Request, res:Response, next:NextFunction) {}

    async delete(req: Request, res: Response, next: NextFunction) {}
}
