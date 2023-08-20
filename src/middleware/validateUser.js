import User from "@/models/userModel";
import { NextResponse } from "next/server";

const validateUser = async (request) => {
  //   console.log("Post request");
  const reqBody = await request.json();
  const { username, email, password } = reqBody;

  // userform validation

  if (!email) {
    return NextResponse.json(
      { message: "Email is not provided" },
      { status: 400 }
    );
  }
  if (!password) {
    return NextResponse.json({ message: "password is n" }, { status: 400 });
  }
  if (!username) {
    return NextResponse.json(
      { message: "username is not provided" },
      { status: 400 }
    );
  }

  // user is already present :
  const userAvailable = await User.findOne({ email });
  if (userAvailable) {
    return NextResponse.json(
      { message: "Email already exist" },
      { status: 400 }
    );
  }

  return null;
};
export default validateUser;
