import mongoose from 'mongoose';
const { Schema } = mongoose;

const userSchema = new Schema({
    username:{
        type: String,
        required: true,
        unique: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    img: {
        type: String,
        default: "",
    },
    desc: {
        type: String,
        default: "",
    },
    isSeller: {
        type: Boolean,
        default: false,
    },
    phone: {
        type: String,
        default: "",
    },
},{
    timestaps:true
});
export default mongoose.model("User", userSchema);