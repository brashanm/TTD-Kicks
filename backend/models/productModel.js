import mongoose from "mongoose"

const productSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    name: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true,
    },
    brand: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: Boolean,
        required: true,
        default: false
    },
    isAdmin: {

    }
}, {
    timestamps: true
})

const User = mongoose.model('User', userSchema)

export default User