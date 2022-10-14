import mongoose from "mongoose"

const orderSchema = mongoose.Schema({
    name: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    orderItems: [{
        name: { type: String, required: true},
        quantity: { type: Number, required: true},
        image: { type: String, required: true},
        price: { type: Number, required: true},
        product: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: 'Product',
        },

    }],
    paymentMethod: {
        type: String,
        required: true
    },
    paymentResult: {
        id: { type: string },
        status: { type: string },
        update_time: { type: string },
        email: { type: string },
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