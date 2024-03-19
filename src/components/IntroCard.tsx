import {css} from "../../styled-system/css"
export default function IntroCard() {
    return (
        <article className={
            css({
                rounded: 'lg',
                border: '1px solid',
                borderColor: 'black',
                padding: '5px',
                margin: '5px',
                bgColor: 'white',
            })
        }>
            <h2 className={
                css({
                    fontSize: '2xl',
                    fontWeight: 'bold',
                    textAlign: 'center',
                })
            }>
                Hello Dream World!
            </h2>
            <div className={
                css({
                    /**中央に要素を寄せたい */
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                })
            }>
                <p className={css({
                    fontSize: 'md'
                })}>
                    ここは夢の世界です。夢の世界では、あなたの夢を叶えるための様々な情報があります。<br />
                    このサイトでは、夢の世界についての情報を提供しています。<br />
                    このサイトを通じて、あなたの夢を叶えるための情報を得てください。
                    
                </p>
            </div>
        </article>
    )
}