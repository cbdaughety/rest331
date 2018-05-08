import mongoose from 'mongoose';

const Scjema = mongoose.Schema;

export const ContrastSchema = new Schema({
    firstName: {
        type: String,
        required: 'Enter first name'
    },
    lastName: {
        type: String,
        required: 'Enter last name'
    },
    email: {
        type: String
    },
    company: {
        type: String
    },
    phone: {
        type: Number
    },
    create_date: {
        type: Date,
        default: Date.now
    }
})