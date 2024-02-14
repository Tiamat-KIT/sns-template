'use client'
import "../globals.css"
import { useConvexAuth } from 'convex/react'
import { redirect } from 'next/navigation'
import { ReactNode } from 'react'
import NavgationHeader from '@/components/NavgationHeader'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const { isAuthenticated, isLoading } = useConvexAuth()

  if (isLoading) {
    return (
      <div className='h-full flex justify-center items-center'>
        <p>Loading...</p>
      </div>
    )
  }

  if (!isAuthenticated) {
    return redirect('/')
  }

  return (<main className='h-full'>
    <NavgationHeader />
    {children}
  </main>)
}
