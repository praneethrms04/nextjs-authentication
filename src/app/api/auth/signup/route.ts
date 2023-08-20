import bcryptjs from "bcryptjs";
import User from "@/models/userModel";
import { NextRequest, NextResponse } from "next/server";
import connectMongoDB from "@/config/dbConnection";

connectMongoDB();

export const POST = async (request: NextRequest) => {
  try {
    const reqBody = await request.json();
    const { username, email, password } = reqBody;

    if (!email || !username || !password) {
      return NextResponse.json(
        "Please providde email or password or username",
        { status: 400 }
      );
    }

    // user is already present :
    const userAvailable = await User.findOne({ email });
    if (userAvailable) {
      return NextResponse.json("Email already exist", { status: 400 });
    }

    const salt = await bcryptjs.genSalt(10);
    const haspassword = await bcryptjs.hash(password, salt);
    const newUser = new User({
      username,
      email,
      password: haspassword,
    });

    await newUser.save();
    // withpout password
    const userObj = Object.assign({}, newUser.toObject());
    delete userObj.password;

    return NextResponse.json(
      {
        message: `${newUser.username} has been successfully registed`,
        success: true,
        userDetails: userObj,
      },
      { status: 201 }
    );
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
};
