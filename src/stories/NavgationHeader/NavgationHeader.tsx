"use client";
import { SignInButton, UserButton } from "@clerk/clerk-react";
import { useConvexAuth } from "convex/react";
import {tv,type VariantProps} from "tailwind-variants"


const NavgationHeaderClass = tv({
    base: "w-full",
    /*
        variants: { } ,
        defaultVariants: { },
    */
})

type NavgationHeaderVariants = VariantProps<typeof NavgationHeaderClass>

interface NavgationHeaderProps extends NavgationHeaderVariants {
    /* children?: React.ReactNode */
}

export default function NavgationHeader(plop?: NavgationHeaderProps){
    const { isAuthenticated, isLoading } = useConvexAuth();
    return (
        <header className={ NavgationHeaderClass(plop) }>
            <div className="flex justify-end">
                {!isAuthenticated && !isLoading && (
                    <SignInButton/*  redirectUrl="/timeline" *//>
                )}
                {isAuthenticated && !isLoading && (
                    <UserButton/*  afterSignOutUrl="/" *//>
                )}
            </div>
        </header>
    )
}