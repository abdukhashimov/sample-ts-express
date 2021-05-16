import mongoose, { Schema, Document } from "mongoose"
import { ITag } from "./tags"

export interface ISample extends Document {
    name: string
    description: string
    tags: ITag[]
}

let Sample = new Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    tags: [
        {
            type: String
        }
    ]
})

module.exports = {
    Sample: mongoose.model<ISample>("Sample", Sample)
}
