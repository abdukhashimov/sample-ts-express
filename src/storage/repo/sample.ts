import {ISample} from "../../models/sample"
import {findAllQuery} from "../../types/querymodel"

export interface ISampleAllResponse {
    payloads:ISample[],
    count:number
}

export interface SampleRepo {
    Create(payload:ISample):string
    Update(slug:string, payload:ISample):string
    Delete(slug:string):any
    Get(slug:string, lang:string):ISample
    FindAll(query:findAllQuery):ISampleAllResponse
}
