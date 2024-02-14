import "@/app/globals.css"
import {tv,type VariantProps} from "tailwind-variants"

const FooterClass = tv({
    base: "",
    /*
        variants: { } ,
        defaultVariants: { },
    */
})

type FooterVariants = VariantProps<typeof FooterClass>

interface FooterProps extends FooterVariants {
    children?: React.ReactNode
}

export default function Footer(plop: FooterProps){
    return (
        <div className={ FooterClass(plop) }>
            {plop.children}
        </div>
    )
}