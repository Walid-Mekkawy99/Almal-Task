
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
// app/layout.tsx أو في _app.tsx لو لسه بتستخدم pages/
import { Poppins } from 'next/font/google'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'], // اختار الأوزان اللي محتاجها
  variable: '--font-poppins', // مهم عشان Tailwind
})

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Weather App',
  description: 'Next.js + Tailwind Starter',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${poppins.variable}`}>
      <body className={inter.className}>{children}</body>
    </html>
  )
}