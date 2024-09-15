import { InferSchemaType, Schema, model } from "mongoose";

const CategorySchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },

  image: {
    type: String,
  },

  products: [{ type: Schema.ObjectId, ref: "Product" }],
});

type Category = InferSchemaType<typeof CategorySchema>;

export default model<Category>("Category", CategorySchema);
