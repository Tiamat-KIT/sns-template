import type {Meta,StoryObj} from "@storybook/react"
import NavgationHeader from "./NavgationHeader"

const NavgationHeaderMeta = {
    title: "Example/NavgationHeader",
    component: NavgationHeader,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof NavgationHeader>

export default NavgationHeaderMeta
type NavgationHeaderStory = StoryObj<typeof NavgationHeaderMeta>

export const ExampleNavgationHeaderStory: NavgationHeaderStory = {
    args: {},
} 
