'use client'

// import { useStore } from "@/store/store";
// import axios from "axios";
// import { ChevronRight, CloudCog } from "lucide-react";
// import { usePathname, useRouter } from "next/navigation";
import React, { HtmlHTMLAttributes, useState } from "react";
import crypto from "crypto";
import { useSession, signIn, signOut } from "next-auth/react"
// import { NextResponse } from "next/server";

export default function Login() {
  const { data: session } = useSession()
  return (
    <section className="text-white">
      <h1 className="text-5xl mb-6">Login</h1>
      

      <div className="authButtons flex flex-col items-center justify-center gap-5 h-[60vh]">
        <button className="btn btn-primary text-lg w-[30%]" onClick={() => signIn("discord")}>Login Using Discord</button>
        <button className="btn btn-primary text-lg w-[30%]" onClick={() => signOut()}>Logout</button>
      </div>
    </section>
  );
}
