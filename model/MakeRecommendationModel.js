import mongoose from "mongoose";

const recommendationsSchema = mongoose.Schema({
  FirstName: { type: String },
  LastName: { type: String },
  Address: { type: String },
  Email: { type: String },
  NameOfHeritage: { type: String },
  Descriptions: { type: String },
  Pics: { type: Array },
  Videos: { type: Array },
});

const RecommendationsModel = mongoose.model(
  "RecommendationModel",
  recommendationsSchema
);
export default RecommendationsModel;
