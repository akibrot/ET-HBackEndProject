import mongoose from "mongoose";

const adminuserschema = mongoose.Schema({
  FirstName: { type: String },
  LastName: { type: String },
  Address: { type: String },
  Email: { type: String, unique: true },
  Phone: { type: String },
  Password: { type: String },
  Profilepic: { type: Object },
  

});
const AdminUserModel = mongoose.model("AdminUsermodel", adminuserschema);
export default AdminUserModel;
