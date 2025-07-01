import mongoose from 'mongoose';
const { Schema } = mongoose;

const GigSchema = new Schema({
    userId: {
        type: String,
        required: true,
    }, 
    title: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 50,
    },
    description: {
        type: String,
        required: true,
        minlength: 10,
        maxlength: 500,
    },
    totalStars: {
        type: Number,
        required: true,
        default: 0,
    }, starNumber: {
        type: Number,
        required: true,
        default: 0,
    },
    cat: {
        type: String,
        required: true,
    },
    cover: {
        type: String,
        required: true,
    },
    image: {
        type: [String],
        default: [],
    },
    shortTitle: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 50,
    },
    shortDesc: {
        type: String,
        required: true,
        minlength: 10,
        maxlength: 100,
    },
    price: {
        type: Number,
        required: true,
        default: 0,
    },
    deliveryTime: {
        type: Number,
        required: true,
        default: 1,
    },
    revisionNumber: {
        type: Number,
        required: true,
        default: 1,
    },
    feature:{
        type: Boolean,
        default: false,
    },

    sales: {
        type: Number,
        default: 0,
    },

},{
    timestaps:true
});
export default mongoose.model("User", GigSchema);