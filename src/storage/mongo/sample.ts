import { SampleRepo, ISampleAllResponse } from "../repo/sample"
import Sample, { ISample } from "../../models/sample"
import { findAllQuery } from "../../types/querymodel"
import { logger } from "../../config/logger"

export class SampleStorage implements SampleRepo {
    private scope = "storage.sample"
    async create(payload: ISample): Promise<string> {
        throw new Error("not implemented yet")
    }

    async update(slug: string, payload: ISample): Promise<string> {
        return ""
    }

    async delete(slug: string): Promise<any> {}

    async get(slug: string, lang: string): Promise<ISample> {
        try {
            let dbObj = await Sample.findOne({ slug, lang })

            if (!dbObj) {
                logger.warn(`${this.scope}.get failed to findOne with slug: ${slug} and ${lang}`)
                throw new Error("Db object is not found")
            }

            return dbObj
        } catch (error) {
            logger.error(`${this.scope}.get: finished with error: ${error.message}`)
            throw new Error("Failed to get the object from DB")
        }
    }

    async findAll(query: findAllQuery): Promise<ISampleAllResponse> {
        throw new Error("not implemented yet")
    }
}
