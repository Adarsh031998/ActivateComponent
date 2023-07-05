import React from 'react';
import InputText from './input';
import { reduxForm, Field } from 'redux-form';
import { mergeCls } from '@/utils/helper';
import { FunctionComponent } from 'react';
interface Index {
  label?: string;
  labelClassname?: string;
  type: 'text' | 'number';
  className?: string;
  placeholder?: string;
  name?: string;
  parentClassName?: string;
  onChange?: () => void;
  style?: any;
}
const Index: FunctionComponent<Index> = (props) => {
  const {
    label,
    labelClassname,
    name,
    className,
    onChange,
    placeholder,
    type,
    parentClassName,
    style
  } = props;
  return (
    <>
      {label && (
        <label
          className={mergeCls([labelClassname, `d-inline-block`])}
          htmlFor={label}
        >
          {label}
        </label>
      )}
      <Field
        component={InputText}
        type={type}
        className={className}
        maxLength={100}
        name={name}
        onChange={onChange}
        placeholder={placeholder}
        parentClassName={parentClassName}
        style={style}
      />
    </>
  );
};
Index.defaultProps = {
  label: '',
  labelClassname: '',
  className: 'fs-6 fw-normal',
  onChange: () => void 0,
  placeholder: '',
  type: 'text',
  parentClassName: ''
};

export default Index;
