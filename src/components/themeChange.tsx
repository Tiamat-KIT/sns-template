'use client'
import { ChangeEventHandler, useState } from 'react'
import { css } from 'styled-system/css'


export type Theme = 'system' | 'light' | 'dark'

export default function ThemeSelect(): JSX.Element {
  const [theme, setTheme] = useState<Theme>('light')

  const themetoggle: ChangeEventHandler<HTMLSelectElement> = (event) => {
    if (typeof window !== 'undefined') {
      const value = event.currentTarget.value as Theme
      setTheme(value)
      localStorage.setItem('theme', value)
      if (value === 'dark') {
        document.documentElement.classList.add('dark')
      } else if (value === 'light') {
        document.documentElement.classList.remove('dark')
      } else {
        // System が選択された場合は OS の設定を見て切り替える
        document.documentElement.classList.toggle(
          'dark',
          window.matchMedia('(prefers-color-scheme: dark)').matches,
        )
      }
    }
  }

  return (
      <select value={theme} onChange={themetoggle} className={css({
        rounded: 'md',
        height: "3rem",
        width: "3rem",
      })}>
        <option value='system'>System</option>
        <option value='light'>Light</option>
        <option value='dark'>Dark</option>
      </select>
  )
}
