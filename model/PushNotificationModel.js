import mongoose from "mongoose";

const Category = mongoose.Schema({
  subject: { type: String },
  description: { type: String },
  readed: { type: Boolean, default: false },
});

const PushNotificationModel = mongoose.model("Notifications", Category);
export default PushNotificationModel;
