import mongoose from "mongoose"

const userSchema = mongoose.Schema({
    name: {
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
        Boolean: true,
        required: true,
        default: false
    }
}, {
    timestamps: true
})

const User = mongoose.model('User', userSchema)

export default User