import "../../app/globals.css"
import {tv,type VariantProps} from "tailwind-variants"

const GradientTextClass = tv({
    slots: {
        gradient: "bg-gradient-to-r",
        text: "text-transparent bg-clip-text  inline-block "
    }
})

type GradientTextVariants = VariantProps<typeof GradientTextClass>

interface GradientTextProps extends GradientTextVariants {
    children?: React.ReactNode,
    start: string,
    middle: string,
    end: string
}

export default function GradientText(plop: GradientTextProps){
    const {gradient,text} = GradientTextClass()
    return (
        <div className={`${gradient()} from-${plop.start} via-${plop.middle} to-${plop.end}`}>
            <h1 className={text()}>
                {plop.children}
            </h1>
        </div>

    )
}