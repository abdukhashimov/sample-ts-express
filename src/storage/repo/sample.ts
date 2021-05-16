import {ISample} from "../../models/sample"
import {findAllQuery} from "../../types/querymodel"

export interface ISampleAllResponse {
    payloads:ISample[],
    count:number
}

export interface SampleRepo {
    create(payload:ISample):Promise<string | never>
    update(slug:string, payload:ISample):Promise<string>
    delete(slug:string):Promise<any>
    get(slug:string, lang:string):Promise<ISample>
    findAll(query:findAllQuery):Promise<ISampleAllResponse>
}
