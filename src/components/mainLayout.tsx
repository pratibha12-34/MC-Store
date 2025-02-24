"use client"

import { usePathname } from 'next/navigation'
import React from 'react'
import Header from './header'
import Footer from './footer'
import Navbar from './navbar'
import NavList from './navlist'


export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname()

  return (
    <div className={`backdrop-blur-sm`}>
      {pathname.startsWith("/store") ? <Header><NavList></NavList></Header> : <Navbar /> } 
      <main className="mx-auto xl:w-[78rem] w-full flex-grow px-2 sm:px-4 mb-8">
        {children}
      </main>
    </div>
  )
}
