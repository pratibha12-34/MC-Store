import NextAuth, { AuthOptions } from "next-auth";
import DiscordProvider from "next-auth/providers/discord";
import type { JWT } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";




// Helper function to refresh the access token
// async function refreshAccessToken(token: JWT) {
//   try {
//     const response = await fetch("https://discord.com/api/oauth2/token", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/x-www-form-urlencoded",
//       },
//       body: new URLSearchParams({
//         client_id: process.env.DISCORD_CLIENT_ID!,
//         client_secret: process.env.DISCORD_CLIENT_SECRET!,
//         grant_type: "refresh_token",
//         refresh_token: token.refreshToken,
//       }),
//     });

//     const newTokens = await response.json();
//     if (!response.ok) throw newTokens;

//     return {
//       ...token,
//       accessToken: newTokens.access_token,
//       refreshToken: newTokens.refresh_token ?? token.refreshToken,
//       accessTokenExpires: Date.now() + newTokens.expires_in * 1000,
//     };
//   } catch (error) {
//     console.error("Error refreshing access token:", error);
//     return null;
//   }
// }



export const authOptions: AuthOptions =  {
  providers: [
    DiscordProvider({
      clientId: process.env.NEXT_PUBLIC_DISCORD_CLIENT_ID,
      clientSecret: process.env.DISCORD_CLIENT_SECRET,
      authorization: {
        url: "https://discord.com/api/oauth2/authorize",
        params: { scope: "identify email guilds" }, // Adjust scopes if needed
      },
      token: "https://discord.com/api/oauth2/token",
      userinfo: "https://discord.com/api/users/@me",
    }),
  ],
  callbacks: {
    async jwt({ token, account, user }: { token: JWT; account?: any; user?: any }) {
      if (account) {
        token.accessToken = account.access_token;
        token.refreshToken = account.refresh_token;
        token.accessTokenExpires = Date.now() + account.expires_in * 1000;
      }
      // 🔄 Refresh token if expired
      // if (Date.now() > token.accessTokenExpires) {
      //   console.log("Access token expired, refreshing...");
      //   const refreshedTokens = await refreshAccessToken(token);
      //   return refreshedTokens || token;
      // }
      return token;
    },
    async session({ session, token }) {
      session.user = {
        ...session.user,
        accessToken: token.accessToken,
        refreshToken: token.refreshToken,
      };
      return session;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
}

// export const authOptions: AuthOptions = handler
const handler = NextAuth(authOptions);
export {handler as POST, handler as GET}
// const handler = NextAuth(authOptions);

// export async function GET(req: NextRequest) {
//   return handler(req);
// }

// export async function POST(req: NextRequest) {
//   return handler(req);
// }