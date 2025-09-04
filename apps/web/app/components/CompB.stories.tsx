import { Meta, StoryObj } from "@storybook/nextjs-vite";
import { CompB } from "./CompB";
import { ComponentProps } from "react";

type StoryArgs = ComponentProps<typeof CompB>;

const meta = {
  title: "web/components/CompB",
  component: CompB,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<StoryArgs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
