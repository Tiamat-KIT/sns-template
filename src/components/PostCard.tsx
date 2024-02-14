import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  /*  CardTitle, */
} from '@/components/ui/card'

export default function PostCard() {
  return (
    <Card className='flex'>
      <CardHeader>
        {/* <CardTitle>Card Title</CardTitle> */}
        <Avatar>
          <AvatarImage src='https://github.com/shadcn.png' />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <CardDescription>Card Description</CardDescription>
      </CardHeader>
      <CardContent className='container m-auto text-center justify-center align-center'>
        <p>Card Content</p>
      </CardContent>
      {/* <CardFooter>
                <p>Card Footer</p>
            </CardFooter> */}
    </Card>
  )
}
