"use client"
import { SignInButton } from '@clerk/clerk-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

export default function Home() {
  return (
    <main className='container mx-auto p-5'>
      <h1 className='text-center lg:text-5xl md:text-3xl sm:text-xl font-extrabold mb-5'>
        あなたの面白い夢の内容、みんなで共有しよう
      </h1>
      <Card className='mb-5'>
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
      </Card>
      <div className='grid grid-cols-3'>
        <div className='grid-span-1'/>
        <SignInButton mode='modal'afterSignInUrl='/timeline' afterSignUpUrl='/timeline'> 
            <Button variant="secondary" className='grid-span-1'>Join!</Button>
        </SignInButton>
        <div className='grid-span-1'/>
      </div>

    </main>
      
  )
}
