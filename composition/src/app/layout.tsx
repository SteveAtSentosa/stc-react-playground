import {Inter} from 'next/font/google'
import {twMerge} from 'tailwind-merge'

import Header from '@/components/Header'

import './globals.css'

const inter = Inter({subsets: ['latin']})

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body
        className={twMerge('prose h-full w-full bg-zinc-200 text-primary-text', inter.className)}>
        <Header />
        <main id="main" className="grid w-screen">
          {children}
        </main>
      </body>
    </html>
  )
}
