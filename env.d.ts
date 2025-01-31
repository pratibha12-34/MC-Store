// env.d.ts
namespace NodeJS {
    interface ProcessEnv {
        NEXT_PUBLIC_DISCORD_CLIENT_ID: string,
        DISCORD_CLIENT_SECRET: string,
        NEXT_PUBLIC_DISCORD_REDIRECT_URI: string,
        JWT_SECRET: string,
        NEXTAUTH_SECRET: string
    }
  }
  