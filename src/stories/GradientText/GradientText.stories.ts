import type {Meta,StoryObj} from "@storybook/react"
import GradientText from "./GradientText"

const GradientTextMeta = {
    title: "Example/GradientText",
    component: GradientText,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof GradientText>

export default GradientTextMeta
type GradientTextStory = StoryObj<typeof GradientTextMeta>

export const ExampleGradientTextStory: GradientTextStory = {
    args: {},
} 
