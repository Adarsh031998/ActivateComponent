import { StoryObj, Meta } from '@storybook/react';
import Button from '@/components/button';
const meta: Meta<typeof Button> = {
  title: 'Components/Elements/Button',
  component: Button
};
export default meta;
type Story = StoryObj<typeof Button>;
export const TailwindPrimary: Story = {
  args: {
    className: 'bg-primary-900 rounded-1 text-white p-2 d-flex items-center',
    children: 'Click me!'
  }
};
export const BootstrapPrimary: Story = {
  args: {
    className: 'bg-primary rounded-md text-white p-2 flex items-center',
    children: 'Click me!'
  }
};
export const Secondary: Story = {
  args: {
    className:
      'bg-gray-50 rounded-md text-black border border-slate-950  p-2 flex items-center',
    children: 'Click me!'
  }
};
export const Tertiary: Story = {
  args: {
    className: 'bg-secondary-900 rounded-md text-white p-2 flex items-center',
    children: null
  }
};
export const Transparent: Story = {
  args: {
    className: 'bg-transparent rounded-md text-black underline p-2',
    children: 'Click me!'
  }
};
