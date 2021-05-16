import { NextFunction, Request, Response } from "express"
import { Storage } from "../storage/main"

export class SampleController {
    private storage: Storage

    constructor(strg: Storage) {
        this.storage = strg
    }

    async create(req: Request, res: Response, next: NextFunction) {
    }

    async update(req: Request, res: Response, next: NextFunction) {}

    async find(req: Request, res: Response, next: NextFunction) {
        throw new Error("not implemented yet")
    }

    async get(req: Request, res: Response, next: NextFunction) {
        try {
            let lang = req.query.lang || "ru"
            let slug = req.params.slug

            const dbRes = await this.storage.sample.get()
        } catch (error) {
            
        }
    }

    async delete(req: Request, res: Response, next: NextFunction) {}
}
