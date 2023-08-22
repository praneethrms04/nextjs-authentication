import mongoose from "mongoose";

const connectMongoDB = async () => {
  try {
    const connect = await mongoose.connect(process.env.MONGODB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    connect.connection.on("connected", () => {
      console.log(
        `MongoDB connected successfully... ${connect.connection.name}`
      );
    });

    connect.connection.on("error", (err) => {
      console.log(
        `MongoDB connection error, Please make sure MongoDB is running, ${err}`
      );
    });
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    process.exit(1);
  }
};

export default connectMongoDB;
