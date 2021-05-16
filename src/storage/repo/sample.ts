import {ISample} from "../../models/sample"
import {findAllQuery} from "../../types/querymodel"

export interface ISampleAllResponse {
    payloads:ISample[],
    count:number
}

export interface SampleRepo {
    Create(payload:ISample):Promise<string | never>
    Update(slug:string, payload:ISample):Promise<string>
    Delete(slug:string):Promise<any>
    Get(slug:string, lang:string):Promise<ISample>
    FindAll(query:findAllQuery):Promise<ISampleAllResponse>
}
