import React from 'react'
import { NavItem } from "@/components/navlist"
import { ChartBarStacked } from 'lucide-react' 


const category: NavItem[] = [
  { id:1, href:"/dashboard/category/general",label:"General",icon:<ChartBarStacked className="text-orange-700"/>}
]


const dashboard = async () => {
  return <></>
}

export default dashboard
