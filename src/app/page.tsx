"use client"
import { SignInButton } from '@clerk/clerk-react';
import {css} from "../../styled-system/css"
import IntroCard from '@/components/IntroCard';

export default function Home() {
  return (
    <main className={css({
      maxWidth: '100%',
      display: 'flex',
      justifyContent: 'center',
    })}>
      <h1 className={css({
        fontSize: '3xl',
        fontWeight: 'extrabold',
        textAlign: 'center',
      })}>
        あなたの面白い夢の内容、みんなで共有しよう
      </h1>
      <IntroCard></IntroCard>
      {/* <Card className='mb-5'>
        <CardHeader>
          <CardTitle>This SNS is?</CardTitle>
          <CardDescription>このSNSってどんなSNS？</CardDescription>
        </CardHeader>
        <CardContent>
          <h3 className='text-xl font-bold'>
            睡眠中に見た夢の内容を共有して楽しむSNS
          </h3>
          <div className="text-lg">
            <p>おいしいご飯を食べる夢、誰かと一緒に遊ぶ夢、変なのに追いかけられる夢、トイレにギリギリ間に合う夢</p>
            <p>そんなユニークで面白いあなたの夢の内容は、きっと誰かを笑顔にします。</p>
            <p>それをどんどん書き残していってください。毎日書いていきましょう</p>
            <p>きっと寝ることが楽しみになり、今日は何の夢を見るのかわくわくしながら眠れることでしょう</p>
            <p>寝ない日をなくすことで、心身ともに健康になります。今日から記録してみませんか？</p>
          </div>
        </CardContent>
        <CardFooter className='text-lg'>
          <p>Utakata Kyosui</p>
        </CardFooter>
      </Card> */}
      <div className={css({
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      })}>
        <SignInButton mode='modal'afterSignInUrl='/timeline' afterSignUpUrl='/timeline'> 
            <button className={css({
              bgColor: 'blue.500',
              color: 'white',
              padding: '5px',
              margin: '5px',
              fontSize: 'lg',
              fontWeight: 'bold',
              rounded: 'lg',
              shadow: 'xl',
              width: '1/3',
              /* border: '1px solid',
              borderColor: 'black', */
              _hover: {
                bgColor: 'blue.600',
                shadow: 'none',
              }
            })}>Join!</button>
        </SignInButton>
      </div>

    </main>
      
  )
}
