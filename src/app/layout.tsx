import type { ReactNode } from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"

import { TanstackProvider } from "@/contexts/TanstackContext"

import "@/styles/globals.css"

interface RootLayoutProps {
  children: ReactNode
}

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
}

const inter = Inter({
  display: "swap",
  subsets: ["latin"],
  variable: "--font-inter",
})

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="pt-br" className={inter.className}>
      <body>
        <TanstackProvider>{children}</TanstackProvider>
      </body>
    </html>
  )
}
