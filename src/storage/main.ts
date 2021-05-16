import {SampleStorage} from "./mongo/sample"
interface IStorage {
    sample:SampleStorage
}

export let storage:IStorage = {
    sample: new SampleStorage()
}