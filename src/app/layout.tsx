import type { Metadata } from 'next'
import { Inter as FontSans } from 'next/font/google'
import './globals.css'
import LoginProvider from '@/components/LoginProvider'
import NavgationHeader from '@/components/NavgationHeader'
import { cn } from '@/lib/utils'

const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans',
})
export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const mediaQueryLlistener = (e: MediaQueryListEvent) => {
    if (localStorage.theme === 'system') {
      if (e.matches) {
        document.documentElement.classList.add('dark')
      } else {
        document.documentElement.classList.remove('dark')
      }
    }
  }
  if (typeof window !== 'undefined') {
    document.addEventListener('load', () => {
      if (!('theme' in localStorage) || localStorage.theme === 'system') {
        if (window.matchMedia('(prefers-color-scheme: dark').matches) {
          document.documentElement.classList.add('dark')
        }
        localStorage.setItem('theme', 'system')
      } else if (localStorage.theme === 'dark') {
        localStorage.theme === 'dark'
      } else {
        document.documentElement.classList.remove('dark')
      }
      window
        .matchMedia('(prefers-color-scheme:dark)')
        .addEventListener('change', mediaQueryLlistener)
      // https://zenn.dev/azukiazusa/articles/bee71756d66679 も参考になったけど採用しなかった
    })
  }
  return (
    <html lang='ja'>
      <body
        className={cn(
          'min-h-screen font-sans antialiased bg-cover bg-morning dark:bg-night',
          fontSans.variable,
        )}
      >
        <LoginProvider>
          {/* <NavgationHeader /> */}
          {children}
        </LoginProvider>
      </body>
    </html>
  )
}
