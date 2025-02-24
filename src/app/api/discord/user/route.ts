import { getServerSession } from "next-auth";
import { authOptions } from "../../auth/[...nextauth]/route";
import { NextResponse, NextRequest } from "next/server";

export async function GET(req: NextRequest) {
  const accessToken = req.headers.get("accessToken");
  if(!accessToken) {
    return NextResponse.json({error: "No access token provided"})
  }
  try {
    const res = await fetch("https://discord.com/api/users/@me", {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    if (!res.ok) throw new Error("Failed to fetch Discord user data");

    const data = await res.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error("Error fetching Discord user data:", error);
    return NextResponse.json(
      { error: "Failed to fetch Discord user data" }, 
      { status: 500 }
    );
  }
}
