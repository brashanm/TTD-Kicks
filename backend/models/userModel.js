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

    }
}, {
    timestamps: true
})

const User = mongoose.model('User', userSchema)

export default User