import {SampleStorage} from "./mongo/sample"
interface IStorage {
    Sample():SampleStorage
}

export class Storage implements IStorage {
    Sample():SampleStorage {
       return new SampleStorage()
    }
}
