import jwt from "jsonwebtoken";
import { NextResponse } from "next/server";

const verifyToken = async (request) => {
  const token = await request.headers[x - access - token];

  if (!token) {
    return NextResponse.json(
      { message: "Unauthorized ..! No token provided" },
      { status: 401 }
    );
  }
  try {
    const decoded = jwt.verify(token, process.env.SECRET_TKOEN, {
      expiresIn: "15d",
    });
    console.log(decoded);
    return null;
  } catch (error) {
    return NextResponse.json({ message: message.error }, { status: 400 });
  }
};

export default verifyToken;
