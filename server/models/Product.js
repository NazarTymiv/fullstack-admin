import mongoos from "mongoose";

const ProductSchema = new mongoos.Schema(
    {
        name: String,
        price: Number,
        description: String,
        category: String,
        rating: Number,
        supply: Number,
    },
    { timestamps: true }
);

const Product = mongoos.model("Product", ProductSchema);
export default Product;
