import mongoose, { Schema } from "mongoose";

const CommentsSchema = mongoose.Schema({
    publicationsId: {
        type: Schema.Types.ObjectId,
        ref: 'Publications',
    },
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'User',
    },
    title: {
        type: String,
        require: true,
    },
    comments: {
        type: String,
        require: true,
    }
});

CommentsSchema.methods.toJSON = function(){
    const { _v, _id, ...comments} = this.toObject();
    comments.uid = _id;
    return comments;
}

export default mongoose.model('Comment', CommentsSchema);