import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "@/models/userModel";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (request) => {
  try {
    const reqBody = await request.json();
    const { email, password } = reqBody;

    if (!email || !password) {
      return NextResponse.json(
        { message: "please provide email || password" },
        { status: 400 }
      );
    }

    const user = await User.findOne({ email });

    if (!user) {
      return NextResponse.json(
        { message: "User does not exist" },
        { status: 400 }
      );
    }
    const validPassword = await bcryptjs.compare(password, user.password);
    if (!validPassword) {
      return NextResponse.json(
        { message: "Invalid Password" },
        { status: 400 }
      );
    }

    if (user && validPassword) {
      const accesstoken = jwt.sign(
        { userId: user._id },
        process.env.SECRET_TKOEN,
        { expiresIn: "15d" }
      );

      const userObj = Object.assign({}, user.toObject());
      delete userObj.password;
      userObj.token = accesstoken;
      return NextResponse.json(
        {
          message: "Login success",
          success: true,
          user: userObj,
        },
        { status: 200 }
      );
    }
  } catch (error) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
};