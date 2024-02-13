/** @type {import('next').NextConfig} */

const nextConfig = {
    env:{
        NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY: "pk_test_b3B0aW1hbC1waWdlb24tNzIuY2xlcmsuYWNjb3VudHMuZGV2JA",
        CLERK_SECRET_KEY:"sk_test_UhsEA8SZfC52z79EgAwaxYqYUmJetyw01dPaq2bz1Z",
        // Deployment used by `npx convex dev`
        /* CONVEX_DEPLOYMENT: "dev:loyal-dog-269|0132546eaf977d83394e336f6e1a6dc69d746824ef050c46169054c8571d1111607ee8a43873e7c70d640e22645b0c104dcacf", // team: tiamat-kit, project: sns-template
        NEXT_PUBLIC_CONVEX_URL: "https://loyal-dog-269.convex.cloud" */
    },
}

export default nextConfig