import mongoose from "mongoose";
const studentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique:true,
    }
});
export default mongoose.model('student', studentSchema);