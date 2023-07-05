import { StoryObj, Meta } from '@storybook/react';
import { reduxForm, Field } from 'redux-form';
import TextInput from '@/components/formElements/input-box';

const InputForm: any = reduxForm({
  form: 'inputForm' // Provide a unique form name
})(TextInput as any);

const Template = (args: any) => (
  <form>
    <InputForm {...args} />
  </form>
);
const meta: Meta<typeof TextInput> = {
  title: 'Components/FormElements/Input',
  component: InputForm,
  tags: ['autodocs']
};

export default meta;
export const Default: StoryObj<typeof Template> = {
  args: {
    label: 'Hello'
  }
};
