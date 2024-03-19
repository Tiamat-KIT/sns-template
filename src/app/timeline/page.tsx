import {css} from "../../../styled-system/css"
import PostCard from '@/components/PostCard'
import "../globals.css"

export default function Home() {
  return (
    <div className={css({
      display: 'grid',
      gridTemplateColumns: '1fr 2fr 1fr',
      gap: '15px',
      padding: '8px',
    })}>
      <aside className={
        css({
          bgColor: 'blue.200',
          rounded: 'xl',
          lg: {
            
          }
        })
      }></aside>
      <main className={css({
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '1rem',
      })}>
        {Array(10).fill(0).map((_, i) => {
          return <PostCard key={i}/>
        })}
      </main>
      <aside className={
        css({
          bgColor: 'blue.200',
          rounded: 'xl',
          
        })
      }></aside>
    </div>
  )
}
