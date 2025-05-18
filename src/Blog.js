import mongoose from "mongoose";

const blogpostSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    }
});

export default mongoose.model('Blog', blogpostSchema);