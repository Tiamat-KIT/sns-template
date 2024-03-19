'use client'
import { SignInButton, UserButton } from '@clerk/clerk-react'
import { useConvexAuth } from 'convex/react'
import ThemeSelect from './themeChange'
import { css } from 'styled-system/css'

export default function NavgationHeader() {
  const { isAuthenticated, isLoading } = useConvexAuth()
  return (
    <header className={css({
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
    })}>
      <ThemeSelect />
      <h1 className={css({
        fontSize: '3xl',
        fontWeight: 'extrabold',
        textAlign: 'center',
        _dark: {
          color: 'white',
        }
      })}>SNS Template</h1>
      <div>
        {isLoading && (
          <button disabled>
            Loading...
          </button>
        )}
        {!isAuthenticated && !isLoading && (
          <SignInButton /*  redirectUrl="/timeline" */>
            <button >Welcome!</button>
          </SignInButton>
        )}
        {isAuthenticated && !isLoading && <UserButton /*  afterSignOutUrl="/" */ />}
      </div>
    </header>
  )
}
