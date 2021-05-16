import {SampleStorage} from "./mongo/sample"
interface IStorage {
    sample:SampleStorage
}

export class Storage implements IStorage {
    sample = new SampleStorage()
}

let storage = new Storage()