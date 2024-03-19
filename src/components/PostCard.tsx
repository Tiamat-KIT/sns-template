import { css } from "styled-system/css"

export default function PostCard() {
  return (
    <>
      <article className={css({
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        border: '1px solid',
        rounded: 'lg',
        borderColor: 'black',
        bgColor: 'white',
        shadow: 'xl',
        _hover: {
          shadow: 'none'
        }
      })}>
        <h3 className={css({
          fontSize: "xl"
        })}>
          test
        </h3>
        <p className={css({
          fontSize: "md"
        })}>
          test
        </p>
      </article>
      {/*
      <Card className='flex'>
      <CardHeader>
        <CardTitle>Card Title</CardTitle>
        <Avatar>
          <AvatarImage src='https://github.com/shadcn.png' />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <CardDescription>Card Description</CardDescription>
      </CardHeader>
      <CardContent className='container m-auto text-center justify-center align-center'>
        <p>Card Content</p>
      </CardContent>
      <CardFooter>
                <p>Card Footer</p>
            </CardFooter> 
    </Card> */}
    </>
    
  )
}
