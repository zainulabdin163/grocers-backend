import { InferSchemaType, Schema, model } from "mongoose";
import { PaymentMethodEnum, UserRoleEnum } from "../enums";

const UserSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },

  email: {
    type: String,
    required: true,
    select: false,
    unique: true,
  },

  password: {
    type: String,
    required: true,
    select: false,
  },

  address: {
    street: { type: String },
    city: { type: String },
    state: { type: String },
    zip: { type: String },
    country: { type: String },
  },

  preferredPaymentMethod: {
    type: String,
    enum: [
      PaymentMethodEnum.CashOnDelivery,
      PaymentMethodEnum.CreditOrDebitCard,
    ],
    default: PaymentMethodEnum.CashOnDelivery,
  },

  cardDetails: {
    number: {
      type: String,
    },

    expiry: {
      type: Date,
    },

    cvv: {
      type: Number,
    },
  },

  orders: [{ type: Schema.ObjectId, ref: "Order" }],

  role: {
    type: String,
    enum: [UserRoleEnum.User, UserRoleEnum.Admin],
    default: UserRoleEnum.User,
  },
});

type User = InferSchemaType<typeof UserSchema>;

export default model<User>("User", UserSchema);
