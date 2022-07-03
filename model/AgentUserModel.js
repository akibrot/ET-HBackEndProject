import mongoose from "mongoose";

const agentuserschema = mongoose.Schema({
  FullName: { type: String },
  Address: { type: String },
  Email: { type: String, unique: true },
  Phone: { type: String },
  Password: { type: String },
  Profilepic: { type: String },
  Notification: { type: Array },
  Recommended: { type: Array },
  Posted: { type: Array },
});
const AgentuserModel = mongoose.model("AgentUserModel", agentuserschema);
export default AgentuserModel;
