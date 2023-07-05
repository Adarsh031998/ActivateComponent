import { StoryObj, Meta } from '@storybook/react';
import Modal from '@/components/modal';
const meta: Meta<typeof Modal> = {
  title: 'Components/Elements/Modal',
  component: Modal
};
export default meta;
type Story = StoryObj<typeof Modal>;
export const Default: Story = {
  args: {
    show: true,
    size: 'md',
    modalTitle: 'Modal Title',
    modalBody: 'Modal Body',
    closeBtnText: 'Cancel',
    submitBtnText: 'Contiue',
    submitBtnClass: 'fw-500 fs-18 lh-15 p-10  br-5 ',
    closeBtnClass: 'fw-500 fs-18 lh-15 p-10 br-5 '
  }
};
