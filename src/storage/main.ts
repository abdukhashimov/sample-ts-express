import {SampleStorage} from "./mongo/sample"
interface IStorage {
    sample():SampleStorage
}

export class Storage implements IStorage {
    sample():SampleStorage {
       return new SampleStorage()
    }
}
