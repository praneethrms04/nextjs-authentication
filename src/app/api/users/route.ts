import User from "@/models/userModel";
import { NextResponse } from "next/server";

export const GET = async () => {
  try {
    const users = await User.find({}).lean();
    // Remove the password field from each user object
    const usersWithoutPassword = users.map(({ password, ...user }) => user);

    return NextResponse.json(
      { success: true, users: usersWithoutPassword },
      { status: 200 }
    );
  } catch (error: any) {
    console.log(error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
};
