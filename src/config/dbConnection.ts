import { error } from "console";
import mongoose from "mongoose";

const connectMongoDB = async () => {
  try {
    const connect = await mongoose.connect(process.env.MONGODB_URL!);
    // console.log(
    //   `MongoDB connected, ${connect.connection.name} , ${connect.connection.host} `
    //   );
    connect.connection.on("Connected", () => {
      console.log(
        `MongoDB connected successfully... ${connect.connection.name}`
      );
    });
    connect.connection.on("error", (err) => {
      console.log(
        `MongoDB connection error,Please make sure MongoDB is running ,${err}`
      );
      process.exit();
    });
  } catch (error) {
    console.log(error);
  }
};

export default connectMongoDB;
