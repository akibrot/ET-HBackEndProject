import mongoose from "mongoose";

const Heritagesschema = mongoose.Schema({
  FullName: { type: String },
  Address: { type: String },
  Email: { type: String },
  Phone: { type: String },
  NameOfHeritage: { type: String },
  Descriptions: { type: String },
  HeritgaPics: { type: Array },
  HeritageVideos: { type: Array },
  GoogleMapHeritage: { type: String },
  TourAgents: { type: String },
//
  HotelName: { type: String },
  HotelEmail: { type: String },
  GoogleMapHotel: { type: String },
  HotelDescription: { type: String },
  HotelImages: { type: Array },
});

const HeritagesModel = mongoose.model("HeritagesModel", Heritagesschema);
export default HeritagesModel;
