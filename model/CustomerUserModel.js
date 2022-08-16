import mongoose from "mongoose";

const NormalUserSchema = mongoose.Schema({
  FirstName: { type: String },
  LastName: { type: String },
  Address: { type: String },
  Region: { type: String },
  Email: { type: String, unique: true },
  Phone: { type: String,},
  Password: { type: String },
  Banned: { type: Boolean,default:false },
});
const CustomerUserModel = mongoose.model("CustomerUserModel", NormalUserSchema);
export default CustomerUserModel;
