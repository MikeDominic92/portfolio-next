import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Michael Hoang - Technical Support Engineer',
  description: 'Technical Support Engineer specializing in cloud automation and RAG-enhanced systems',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} min-h-screen p-8`}>
        <div className="rounded-container min-h-[calc(100vh-4rem)] p-8">
          <Navbar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  )
}
