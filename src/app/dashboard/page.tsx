import React from 'react'
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import Link from "next/link"
import { NavItem } from "@/components/navlist"
import { ChartBarStacked } from 'lucide-react' 
import Image from 'next/image'
import { LogOut, Laptop } from 'lucide-react'
import { signIn, signOut} from 'next-auth/react'
import Header from '@/components/header';
import NavList from '@/components/navlist'


const category: NavItem[] = [
  { id:1, href:"/dashboard/category/",label:"Category",icon:<ChartBarStacked className="text-orange-700"/>}
]


const dashboard = async () => {
  
  const session = await getServerSession(authOptions)
  if (session) {
    // console.log(session)
  }else{
    console.log("Session not found")
  }
  return (
    <div>
      <Header><NavList ListNodes={category}></NavList></Header>
    </div>
  )
}

export default dashboard
