import NextAuth from 'next-auth'
import DiscordProvider from 'next-auth/providers/discord';

const handler =  NextAuth({
  providers: [
    DiscordProvider({
        clientId: process.env.NEXT_PUBLIC_DISCORD_CLIENT_ID,
        clientSecret: process.env.DISCORD_CLIENT_SECRET,
        authorization: {
          params: {
            scope: "identify email guilds guilds.join", // Request more permissions
          },
        },
    }),
    ],
    secret: process.env.NEXTAUTH_SECRET,
    callbacks: {
      session({ session, token }) {
        if(session.user) {
            session.user.id = token.sub
        }
        return session
      },
    },
})

export {handler as POST, handler as GET}