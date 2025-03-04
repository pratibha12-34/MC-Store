import React from 'react';
import { getServerSession } from "next-auth";
import { NavItem } from "@/components/navlist"
import { ChartBarStacked } from 'lucide-react' 
import { authOptions } from "../api/auth/[...nextauth]/route";
import Header from '@/components/header';
import NavList from '@/components/navlist'



const category: NavItem[] = [
    { id:1, href:"/dashboard/general",label:"General",icon:<ChartBarStacked className="text-orange-700"/>}
  ]

  

export default async function DashboardLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
      const session = await getServerSession(authOptions)
      if (session) {
        // console.log(session)
      }else{
        console.log("Session not found")
      }
      return (
        <div className='h-screen flex flex-col'>
          <Header>
            <div className='text-5xl __className_4116d3 text-gray-300'>Dashboard</div>
          </Header>
          {children}
        </div>
      )
  }