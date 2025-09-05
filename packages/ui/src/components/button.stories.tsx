import { Button } from "./button";
import { Meta, StoryObj } from "@storybook/react-vite";

const meta: Meta<typeof Button> = {
  component: Button,
  title: "components/ui/button",
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "Button",
  },
};

export const Secondary: Story = {
  args: {
    children: "Button",
    variant: "secondary",
  },
};

export const Destructive: Story = {
  args: {
    children: "Button",
    variant: "destructive",
  },
};

export const Link: Story = {
  args: {
    children: "Button",
    variant: "link",
  },
};

export const Ghost: Story = {
  args: {
    children: "Button",
    variant: "ghost",
  },
};

export const Outline: Story = {
  args: {
    children: "Button",
    variant: "outline",
  },
};

export const Disabled: Story = {
  args: {
    children: "Button",
    disabled: true,
  },
};

export const MarketingCta: Story = {
  args: {
    children: "Button",
    variant: "marketingcta",
  },
};

export const AllSizes: Story = {
  render: () => (
    <div className="flex flex-col gap-4 items-start">
      <div className="flex items-center gap-4">
        <Button size="sm">Small Button</Button>
        <Button size="default">Default Button</Button>
        <Button size="lg">Large Button</Button>
        <Button size="icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M5 12h14" />
            <path d="M12 5v14" />
          </svg>
        </Button>
      </div>
    </div>
  ),
};
