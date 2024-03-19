import { ConvexReactClient } from 'convex/react'
import { env } from '@/env'
const convex = new ConvexReactClient(env.NEXT_PUBLIC_CONVEX_URL as string)
export default convex
