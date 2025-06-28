const mongoose = require("mongoose");

mongoose.set('strictQuery', false);

const uri = "mongodb+srv://shivendra:7310263008@cluster0.ghhpneu.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

mongoose.connect(uri)
  .then(() => {
    console.log("Connected to MongoDB!");
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB:", err);
  })


