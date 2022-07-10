import mongoose from "mongoose";

const Category = mongoose.Schema({
  title: { type: String },
});

const CategoryList = mongoose.model("Category", Category);
export default CategoryList;
