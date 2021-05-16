import { SampleRepo, ISampleAllResponse } from "../repo/sample"
import Sample, { ISample } from "../../models/sample"
import { findAllQuery } from "../../types/querymodel"
import * as log from "loglevel"

let scope = "storage.sample: "
export class SampleStorage implements SampleRepo {
    async Create(payload: ISample): Promise<string> {
        throw new Error("not implemented yet")
    }

    async Update(slug: string, payload: ISample): Promise<string> {
        return ""
    }

    async Delete(slug: string): Promise<any> {
        
    }

    async Get(slug: string, lang: string): Promise<ISample> {
        try {
            let dbObj = await Sample.findOne({slug, lang})

            if (!dbObj) {
                log.warn(scope, "get", `failed to findOne db object with slug: ${slug} and ${lang}`)
                throw new Error("Db object is not found")
            }

            return dbObj
        } catch (error) {
            log.error(scope, "get", error.message)
            throw new Error("Failed to get the object from DB")
        }
    }

    async FindAll(query: findAllQuery): Promise<ISampleAllResponse> {
        throw new Error("not implemented yet")
    }
}

