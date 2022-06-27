import mongoose from "mongoose";

const Feedback = mongoose.Schema({
  email: { type: String },
  feedback: { type: String },
});

const FeedbackModel = mongoose.model("Feedback", Feedback);
export default FeedbackModel;
