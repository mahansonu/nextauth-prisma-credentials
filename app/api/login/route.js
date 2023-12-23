import { NextResponse } from "next/server";
import { prisma } from "@/app/db/prisma";
import { isPasswordSame } from "@/app/bcrypt/password";
export async function POST(req, res) {
  const data = await req.json();
  const user = await prisma.user.findUnique({
    where: { username: data.username },
  });
  if (!user) {
    return Response.json(
      { message: "No user found in out database" },
      {
        status: 401,
        statusText: "No user found in our database",
      }
    );
  }
  let passwordMatched = await isPasswordSame(data.password, user.password);
  if (!passwordMatched) {
    return Response.json(
      { message: "Password is not same" },
      {
        status: 401,
        statusText: "Password is not same",
      }
    );
  }
  const { password, createdAt, updatedAt, ...resp_user } = user;
  return Response.json({ success: true, user: resp_user }, { status: 200 });
}
