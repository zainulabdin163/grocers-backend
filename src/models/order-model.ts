import { InferSchemaType, Schema, model } from "mongoose";
import { OrderPaymentEnum } from "../enums";

const OrderSchema = new Schema({
  user: [{ type: Schema.ObjectId, ref: "User", required: true }],

  products: [{ type: Schema.ObjectId, ref: "Product", required: true }],

  quantity: {
    type: Number,
    required: true,
  },

  total: {
    type: Number,
    required: true,
  },

  paymentMethod: {
    type: String,
    enum: [OrderPaymentEnum.CreditOrDebitCard, OrderPaymentEnum.CashOnDelivery],
    required: true,
  },
});

type Order = InferSchemaType<typeof OrderSchema>;

export default model<Order>("Order", OrderSchema);
