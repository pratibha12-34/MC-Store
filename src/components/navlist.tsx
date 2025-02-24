"use client"

import { Banknote, CircleHelp, Coins, Crown, Gem, KeySquare, LogOut, Laptop } from 'lucide-react'
import Link from 'next/link'
import { ReactNode } from 'react'

export interface NavItem{
    id: number,
    href: string,
    label: string,
    icon: ReactNode,
}

interface props {
  ListNodes?: NavItem[]
}

const links: NavItem[] = [
  { id: 1, href: "/store/category/ranks", label: "Ranks", icon: <Crown className="text-orange-700" /> },
  { id: 2, href: "/store/category/keys", label: "Keys", icon: <KeySquare className="text-orange-700" /> },
  { id: 3, href: "/store/category/money", label: "Money", icon: <Banknote className="text-orange-700" /> },
  { id: 4, href: "/store/category/coins", label: "Club Coins", icon: <Coins className="text-orange-700" /> },
  { id: 5, href: "/store/category/bundles", label: "Bundles", icon: <Gem className="text-orange-700" /> },
]


export default function NavList({ListNodes}: props){
  if(!ListNodes){
    ListNodes = links
  }
    return (
        <nav className="flex flex-wrap justify-center items-center gap-4 lg:gap-0 lg:bg-zinc-800 border-custom text-white font-bold shadow-xl">
          {
            ListNodes.map((link) => (
              <Link href={link.href} key={link.id} className="nav-block hover:scale-110 ">
                {link.label} {link.icon}
              </Link>
            ))
          }
        </nav>
        )
    }