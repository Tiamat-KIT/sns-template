import {createEnv} from "@t3-oss/env-nextjs"
import { vercel } from "@t3-oss/env-nextjs/presets"
import {z} from "zod"

export const env = createEnv({
    server: {
        /**
         * @param Convexのデプロイメント名またはキー
         */
        CONVEX_DEPLOYMENT: z.string(),
        /**
         * @param Clerkの秘密キー
         */
        CLERK_SECRET_KEY: z.string(),
    },
    client: {
        /**
         * @param ConvexのプロジェクトURL
         */
        NEXT_PUBLIC_CONVEX_URL: z.string().url(),
        /**
         * @param Clerkの公開キー
         */
        NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY: z.string(),
    },
    extends: [vercel],
    runtimeEnv: {
        NEXT_PUBLIC_CONVEX_URL: process.env.NEXT_PUBLIC_CONVEX_URL,
        NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY: process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY,
        CONVEX_DEPLOYMENT: process.env.CONVEX_DEPLOYMENT,
        CLERK_SECRET_KEY: process.env.CLERK_SECRET_KEY,
    },
    skipValidation: false,
    emptyStringAsUndefined: true,
    isServer: typeof window === "undefined",
})



