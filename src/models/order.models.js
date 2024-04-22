import mongoose, {Schema} from "mongoose";

const orderSchema = new Schema(
    {
        orderPrice: {
            type: Number,
            required: true,
          },
          customer: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
          },
          orderItems: {
            type: mongoose.Schema.Types.ObjectId, 
            ref: 'Orderitem'
          },
          address: {
            type: String,
            required: true,
          },
          status: {
            type: String,
            enum: ['PENDING', 'CANCELLED', 'DELIVERED'],
            default: 'PENDING',
          },
    },
    {timestamps:true}
)
export const Order = mongoose.Model("Order" , orderSchema)