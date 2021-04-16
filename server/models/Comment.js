import mongoose from 'mongoose'
const Schema = mongoose.Schema

const Comment = new Schema(
    {
        body: { type: String, required: true },
        creatorId: { type: String, ref: 'Account', required: true }
    },
    { timestamps: true, toJSON: { virtuals: true } }
)

Comment.virtual('creator', {
    localField: 'creatorId',
    ref: 'Account',
    foreignField: '_id',
    justOne: true
})

export default Comment