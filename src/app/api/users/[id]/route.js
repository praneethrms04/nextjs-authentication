import User from "@/models/userModel";
import { useRouter } from "next/navigation";
import { NextResponse } from "next/server";

export const GET = async (request, { params }) => {
  const { id } = params;
  // const url = new URL(request.url);
  // const arr = url.pathname.split("/");
  // const id = arr[arr.length - 1];

  //grab the id from the request
  // const arr = url.split("/");
  // const id = arr[arr.length - 1].toString();

  try {
    const user = await User.findById(id);

    /* without password */
    // const userObj = Object.assign({}, user.toObject());
    const userObj = { ...user.toObject() };
    delete userObj.password;
    return NextResponse.json({ user: userObj }, { sstatus: 200 });
  } catch (error) {
    return NextResponse.json({ error: "User does not exist" }, { status: 400 });
  }
};
