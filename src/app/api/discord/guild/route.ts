import { NextResponse, NextRequest } from "next/server";

export async function GET(req: NextRequest) {
  const accessToken = req.headers.get("accessToken")

  if (!accessToken) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const res = await fetch("https://discord.com/api/users/@me/guilds", {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    if (!res.ok) throw new Error("Failed to fetch Discord guilds");

    const data = await res.json();
    return NextResponse.json(data);
  } catch (error) {
    console.log("SOme error occured")
  }
}
