import mongoose from "mongoose";

const connectToDB = async () => {
  try {
    await mongoose.connect(
        'mongodb+srv://shaikhsaku718:adil215215@netflix.ru8eici.mongodb.net/?retryWrites=true&w=majority'    );

    console.log("mongodb is connected");
  } catch (e) {
    console.log(e);
  }
};

export default connectToDB;
