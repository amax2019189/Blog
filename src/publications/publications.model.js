import mongoose, { Schema, Types } from 'mongoose';


const PublicationSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    content: {
        type: String,
        required: true,
    },
    author: {
        type: String,
        required: true,
    },
    creationDate: {
        type: Date,
        default: Date.now,
    },
    status: {
        type: Boolean,
        default: true,
    },
});

PublicationSchema.methods.toJSON = function () {
    const { __v, _id, status, ...rest} = this.toObject();
    rest.uid = _id;
    return rest;
}

export default mongoose.model('Publications', PublicationSchema);