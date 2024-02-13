"use client";
import { ClerkProvider,useAuth } from "@clerk/clerk-react";
import { ConvexReactClient } from "convex/react";
import { ConvexProviderWithClerk } from "convex/react-clerk";
import React from "react";
import {tv,type VariantProps} from "tailwind-variants"


const LoginProviderClass = tv({
    base: "",
    /*
        variants: { } ,
        defaultVariants: { },
    */
})

type LoginProviderVariants = VariantProps<typeof LoginProviderClass>

interface LoginProviderProps extends LoginProviderVariants {
    children?: React.ReactNode
}

const convex = new ConvexReactClient(process.env.NEXT_PUBLIC_CONVEX_URL as string);

export default function LoginProvider({children}:{children: React.ReactNode}/* plop: LoginProviderProps */){
    return (
        <ClerkProvider publishableKey={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY as string}>
            <ConvexProviderWithClerk client={convex} useAuth={useAuth}>
                {children}
            </ConvexProviderWithClerk>
        </ClerkProvider> 
        )
}