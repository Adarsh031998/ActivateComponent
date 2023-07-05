import { StoryObj, Meta } from '@storybook/react';
import Accordian from '@/components/accordian';
const meta: Meta<typeof Accordian> = {
  title: 'Components/Elements/Accordian',
  component: Accordian,
  tags: ['autodocs']
};
export default meta;
type Story = StoryObj<typeof Accordian>;
export const Default: Story = {
  args: {
    title: 'Lorem ipsum',
    description: 'Contact Customer Care via email mrporter@theseam.uk. ',
    className: 'themeAccordian'
  }
};
