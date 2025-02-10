import NextAuth, { DefaultSession, DefaultUser } from "next-auth"
import { DefaultJWT } from "next-auth/jwt"

declare module "next-auth" {
  /**
   * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
   */
  interface User{
    user: {
      id: string
      access_token: string
      refresh_token: string
    } & DefaultUser
  }
  interface Session {
    user: {
      /** The user's postal address. */
      id: string
      access_token: string
      refresh_token: string
      isAdmin: boolean
    } & DefaultSession["session"]
  }
}