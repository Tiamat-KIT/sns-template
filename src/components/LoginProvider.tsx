"use client";
import { ClerkProvider,useAuth } from "@clerk/clerk-react";
/* import { ConvexReactClient } from "convex/react"; */
import { ConvexProviderWithClerk } from "convex/react-clerk";
import React from "react";
import convex from "../lib/convex";
/* import {tv,type VariantProps} from "tailwind-variants" */


export default function LoginProvider({children}:{children: React.ReactNode}){
    return (
        <ClerkProvider publishableKey={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY as string}>
            <ConvexProviderWithClerk client={convex} useAuth={useAuth}>
                {children}
            </ConvexProviderWithClerk>
        </ClerkProvider> 
        )
}