"use client";
import { SignInButton, UserButton } from "@clerk/clerk-react";
import { useConvexAuth } from "convex/react";
import {tv,type VariantProps} from "tailwind-variants"
import ThemeSelect from "./themeChange";
import { Button } from "./ui/button";


const NavgationHeaderClass = tv({
    base: "w-full flex justify-between items-center p-4 bg-gray-100 dark:bg-gray-800",
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
            <ThemeSelect />
            <h1 className="text-2xl font-extrabold">SNS Template</h1>
            <div>
                {isLoading && (
                    <Button variant="outline" disabled>Loading...</Button>
                )}
                {!isAuthenticated && !isLoading && (
                    <SignInButton/*  redirectUrl="/timeline" */>
                        <Button variant="outline">Welcome!</Button>
                    </SignInButton>
                )}
                {isAuthenticated && !isLoading && (
                    <UserButton/*  afterSignOutUrl="/" *//>
                )}
            </div>
        </header>
    )
}