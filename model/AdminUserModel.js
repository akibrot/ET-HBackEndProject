import mongoose from "mongoose";

const adminuserschema = mongoose.Schema({
  FullName: { type: String },
  Address: { type: String },
  Email: { type: String, unique: true },
  Phone: { type: String },
  Password: { type: String },
  Profilepic: { type: String },
  

});
const AdminUserModel = mongoose.model("AdminUsermodel", adminuserschema);
export default AdminUserModel;
