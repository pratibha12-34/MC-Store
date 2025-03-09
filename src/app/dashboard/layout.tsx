import React from 'react';
import { getServerSession } from "next-auth";
import { Raleway } from "next/font/google";
import { NavItem } from "@/components/navlist"

import { ChartBarStacked } from 'lucide-react' 
import SessionWrapper from "@/components/sessionWrapper";
import { authOptions } from "../api/auth/[...nextauth]/route";
import Header from '@/components/header';
import NavList from '@/components/navlist'



const category: NavItem[] = [
    { id:1, href:"/dashboard/general",label:"General",icon:<ChartBarStacked className="text-orange-700"/>},
    { id:2, href:"/dashboard/voting_sites",label:"voting_sites",icon:<ChartBarStacked className="text-orange-700"/>},
    { id:2, href:"/store",label:"store",icon:<ChartBarStacked className="text-orange-700"/>},
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
        <html lang="en" className="dark" data-theme="dark">
      <SessionWrapper>
      <body
        className={` h-screen  flex flex-col bg-image`}
      > <Header>
     
        <div className='text-5xl __className_4116d3  content-center text-gray-300'>Dashboard</div>
     
        </Header>
        {/* <MainLayout> */}
          {children}
        {/* </MainLayout> */}
        </body>
      </SessionWrapper>
    </html>
      );
  }