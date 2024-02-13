import type {Meta,StoryObj} from "@storybook/react"
import LoginProvider from "./LoginProvider"

const LoginProviderMeta = {
    title: "Example/LoginProvider",
    component: LoginProvider,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof LoginProvider>

export default LoginProviderMeta
type LoginProviderStory = StoryObj<typeof LoginProviderMeta>

export const ExampleLoginProviderStory: LoginProviderStory = {
    args: {},
} 
