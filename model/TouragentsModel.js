import mongoose from "mongoose";

const TourAgents = mongoose.Schema({
  FullName: { type: String },
  Address: { type: String },
  Email: { type: String, unique: true },
  Phone: { type: String },
  Profilepic: { type: String },
  Discriptions: { type: String },
  HomeLink: { type: String },
});
const TourAgentsModel = mongoose.model("TourAgentsModel", TourAgents);
export default TourAgentsModel;
