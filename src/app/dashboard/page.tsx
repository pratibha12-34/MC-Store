import React from 'react'
import { useSession } from 'next-auth/react'
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";



const dashboard = async () => {
  const session = await getServerSession(authOptions)
  if(session) {
    console.log("Found session")
    // console.log(session)
    const res = await fetch(`${process.env.NEXTAUTH_URL}/api/discord/user`)
    const data = await res.json()
    console.log(data)
  }else{
    console.log("Session not found")
  }
  return (
    <div>
      
    </div>
  )
}

export default dashboard
