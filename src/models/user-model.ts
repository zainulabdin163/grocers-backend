import { InferSchemaType, Schema, model } from "mongoose";
import { UserRoleEnum } from "../enums";

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
    type: String,
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
