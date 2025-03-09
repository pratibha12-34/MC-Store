import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import "./globals.css";
import { Footer } from "@/components";
import { Header } from "@/components";
import SessionWrapper from "@/components/sessionWrapper";

const raleway = Raleway({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-raleway",
})



export const metadata: Metadata = {
  title: "Club Colony SMP",
  description: "Club Colony SMP is a Minecraft server",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" data-theme="dark">
      <SessionWrapper>
      <body
        className={`${raleway.className} h-screen  flex flex-col bg-image`}
      > 
     
      
     
      
        {/* <MainLayout> */}
          {children}
        {/* </MainLayout> */}
        </body>
      </SessionWrapper>
    </html>
  );
}
