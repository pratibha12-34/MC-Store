"use client"
import React from 'react'
import Link from "next/link"
import { NavItem } from "@/components/navlist"
import { ChartBarStacked } from 'lucide-react' 


const category: NavItem[] = [
  { id:1, href:"/dashboard/general",label:"General",icon:<ChartBarStacked className="text-orange-700"/>},
  { id:2, href:"/dashboard/voting_sites",label:"voting_sites",icon:<ChartBarStacked className="text-orange-700"/>},
   { id:3, href:"/dashboard/store",label:"voting_sites",icon:<ChartBarStacked className="text-orange-700"/>},
    { id:4, href:"/dashboard/Home",label:"voting_sites",icon:<ChartBarStacked className="text-orange-700"/>}
  
]


const dashboard = async () => {
  return (
 
    <div className="flex-1 overflow-auto">
     
    <div className="flex flex-row justify-center m-20 gap-6 h-screen scroll-behaviour">
      <div className="flex h-auto flex-wrap w-60 border-custom shadow-xl font-bold lg:bg-zinc-800/50 backdrop-blur-md gap-12 overflow-auto content-center ">
      <Link href="/dashboard/general"> <div className="m-5 flex flex-col justify-center items-center w-10/12 h-6 text-xl hover:text-2xl duration-300 cursor-pointer transition-all">General</div></Link>
      <Link href="/dashboard/voting_sites">   <div className="m-5 flex flex-col justify-center items-center w-10/12 h-6 text-xl hover:text-2xl duration-300 cursor-pointer transition-all">Voting Site</div></Link>
      <Link href="/store">   <div className="m-5 flex flex-col justify-center items-center w-10/12 h-6 text-xl hover:text-2xl duration-300 cursor-pointer transition-all">Store</div></Link>
      <Link href="/Home">  <div className="m-5 flex flex-col justify-center items-center w-10/12 h-6 text-xl hover:text-2xl duration-300 cursor-pointer transition-all">Home</div></Link>
      <Link href="/dashboard/general">  <div className="m-5 flex flex-col justify-center items-center w-10/12 h-6 text-xl hover:text-2xl duration-300 cursor-pointer transition-all">General</div></Link>
      </div>
  
      <div className="flex-1 h-full flex-wrap justify-center gap-4 lg:gap-0 lg:bg-zinc-800 text-white font-bold border-custom shadow-xl">
            <div className="px-10 py-72 h-full w-full text-xl ">
              <div className="flex flex-col min h-screen justify-between">
                <div>
                 
                  
                  </div>
                </div>
               
              </div>
            </div>
          </div>
        </div>
      
    );
  };
  


export default dashboard