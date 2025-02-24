"use client"

import Link from 'next/link'
import React, { ReactNode, useState } from 'react'
import Image from 'next/image'
import { Pattaya } from 'next/font/google';
import { LogOut, Laptop } from 'lucide-react'
import CurrencyDropdown from './currencyDropdown'
import { useStore } from '@/store/store'
import localFont from "next/font/local"
import axios from 'axios';
import { useRouter } from 'next/navigation'
import { useSession, signIn, signOut } from 'next-auth/react'

const pattaya = Pattaya({
  subsets: ["latin"],
  variable: "--font-pattaya",
  weight: ["400"]
})

interface props {
  children?: ReactNode
}


const mcFont = localFont({src: "./mcfont.otf"})



export default function Header({children}: props) {
  const { setCurrency } = useStore();
  const router = useRouter()
  const { data: session } = useSession()
  console.log(session)

  const handleCurrencyChange = async (currency: string) => {
    await setCurrency(currency);
  };

  const handleBtn = async (e: any) => {
    e.preventDefault();
    if (session) {
      try {
        signOut()
      } catch (error) {
        console.log("An internal Error occured")
      }
    }
    else {
      signIn('discord')
    }
  }

  return (
    <header className="min-h-28 mb-6 flex justify-center items-center">
      <div className="mx-auto py-4 px-4 w-full xl:w-[80rem] flex flex-col gap-4 lg:gap-0 lg:flex-row justify-between items-center" >
        <div className="flex justify-center items-center">
          <Link href="/store" className="flex gap-4 justify-center items-center">
            <Image src={"/images/logo/logo.png"} width={80} height={80} alt="club colony logo" className="lg:h-20 h-12 w-auto rounded-xl lg:hidden min-[1100px]:block"/>
            <h2 className={`text-orange-600 font-bold text-4xl ${mcFont.className} lg:flex lg:flex-col`}>Club<span> Colony</span></h2>
          </Link>
        </div>


        {children &&<>{children}</>}



        <div className="flex flex-wrap justify-center gap-4 lg:gap-0  lg:bg-zinc-800 text-white font-bold border-custom shadow-xl">
          <button className={`bg-zinc-700 hover:bg-zinc-800 lg:bg-transparent nav-block rounded-full lg:rounded-none`} onClick={handleBtn}>
            <Image src={session ? session.user.image:"https://mc-heads.net/avatar/MHF_Steve"} alt="steve" width={24} height={24} />
            <div className="">
              {session ? session.user.name : 'Login'}
            </div>
            <div className={`${!session && "hidden"}`}>
              <LogOut />
            </div>
          </button>
          
          {session?.user.isAdmin && (<button className='p-2 rounded-full lg:rounded-none lg:bg-transparent bg-zinc-700 text-gray-200 hover:bg-zinc-800 lg:hover:bg-zinc-900'>
            <Link href={'dashboard'}> <Laptop/> </Link>
          </button>)}
          

          <CurrencyDropdown className="nav-block flex gap-2 items-center p-2 text-base w-full h-full rounded-full lg:rounded-none justify-between lg:bg-transparent bg-zinc-700 text-gray-200 hover:bg-zinc-800 lg:hover:bg-zinc-900" onCurrencyChange={handleCurrencyChange}  />

          {/* <Link href={"/discord"} target="_blank" rel="noopener noreferrer" className="bg-zinc-700 hover:bg-zinc-800 lg:bg-transparent nav-block rounded-full lg:rounded-none">
            <CircleHelp className="rounded-full text-white" />
          </Link> */}
        </div>
      </div>
    </header>
  )
}
