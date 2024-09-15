import { InferSchemaType, Schema, model } from "mongoose";

const ProductSchema = new Schema({
  name: {
    type: String,
    required: true,
  },

  category: {
    type: Schema.Types.ObjectId,
    ref: "Category",
  },

  price: {
    type: Number,
    required: true,
  },

  salePrice: {
    type: Number,
    default: 0.0,
  },

  measuringUnit: {
    type: String,
    enum: ["kg", "piece"],
    default: "kg",
  },

  image: {
    type: String,
    required: true,
  },
});

type Product = InferSchemaType<typeof ProductSchema>;

export default model<Product>("Product", ProductSchema);
