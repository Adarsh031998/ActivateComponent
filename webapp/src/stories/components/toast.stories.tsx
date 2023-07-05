import { StoryObj, Meta } from '@storybook/react';
import Toast from '@/components/toast';
const meta: Meta<typeof Toast> = {
  title: 'Components/Elements/Toast',
  component: Toast
};
export default meta;
type Story = StoryObj<typeof Toast>;
export const Default: Story = {
  args: {
    show: true,
    toastTitle: 'Toast Title',
    toastTitleMessage: 'Toast Title Message',
    toastBody: 'Toast Body'
  }
};
