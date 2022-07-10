import mongoose from "mongoose";

const Heritagesschema = mongoose.Schema({
  FullName: { type: String },
  Address: { type: String },
  Email: { type: String },
  Phone: { type: String },
  GoogleMapHeritage: { type: String },
  NameOfHeritage: { type: String },
  DescriptionHeritage: { type: String },
  Heritagepics: { type: Array },
  Heritagevideos: { type: Array },
  category: { type: String },
  TourAgents: { type: String },
  Popular: { type: Boolean, default: false },
  HotelName: { type: String },
  HotelEmail: { type: String },
  GoogleMapHotel: { type: String },
  HotelDescription: { type: String },
  HotelImages: { type: Array },
});

const HeritagesModel = mongoose.model("HeritagesModel", Heritagesschema);
export default HeritagesModel;
