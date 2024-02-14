'use client'
import { useState } from 'react'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

export type Theme = 'system' | 'light' | 'dark'

export default function ThemeSelect(): JSX.Element {
  const [theme, setTheme] = useState<Theme>('light')

  const themetoggle = (event: string) => {
    if (typeof window !== 'undefined') {
      const value = event as Theme
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
    <Select value={theme} onValueChange={themetoggle}>
      <SelectTrigger className='w-[180px]'>
        <SelectValue placeholder='Select Theme' />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Themes</SelectLabel>
          <SelectItem value='system' defaultChecked>
            System
          </SelectItem>
          <SelectItem value='light'>Light</SelectItem>
          <SelectItem value='dark'>Dark</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}
