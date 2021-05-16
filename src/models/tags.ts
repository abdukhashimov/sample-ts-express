import mongoose, {Schema, Document} from "mongoose"

export interface ITag extends Document {
    name: string
    created_at: Date
}

let TagSchema: any = new Schema({
    name: {
        type: String,
        required: true,
    },
    created_at: {
        type: Date,
        default: Date.now
    }
})

export default mongoose.model<ITag>('Tag', TagSchema)