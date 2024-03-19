'use client'
import "../globals.css"
import { useConvexAuth } from 'convex/react'
import { redirect } from 'next/navigation'
import { ReactNode } from 'react'
import NavgationHeader from '@/components/NavgationHeader'
import { css } from "styled-system/css"

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const { isAuthenticated, isLoading } = useConvexAuth()

  if (isLoading) {
    return (
      <div>
        <p>Loading...</p>
      </div>
    )
  }

  if (!isAuthenticated) {
    return redirect('/')
  }

  return (<main className={css({
    // bgColor: 'rgba(255, 255, 255, 0.3)',
  })}>
    <NavgationHeader />
    {children}
  </main>)
}
