import { Button, ButtonVariants } from "@/stories/button.css";
import { Meta, StoryObj } from "@storybook/react";
import React from "react";

type ButtonProps = ButtonVariants & {
    children: React.ReactNode
    onClick?: () => void
}


const meta = {
    title: "PandaCSSで開発したボタンコンポーネント",
    component: Button,
    tags: ['autodocs','panda']
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
    args: {
      children: 'Hello 🐼!',
    },
  };