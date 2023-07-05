import React from 'react';
// import mergeCls from '/utils/merge-class';
import PropTypes from 'prop-types';
// import SvgHelper from '../../elements/svgIcons';
// import ErrorSvg from '/public/assests/svg/alert-triangle.svg';
// import SuccessSvg from '/public/assests/svg/check-circle.svg';
import { FunctionComponent } from 'react';
// import style from '../formElements.module.scss';

/* Input interface */
interface InputProps {
  type: 'text' | 'number';
  className?: string;
  disabled?: boolean;
  style?: any;
  input: any;
  placeholder?: string;
  name?: string;
  parentClassName?: string;
}
/**
 * Input component
 * @param {*} props
 * @returns
 */
const Input: FunctionComponent<InputProps> = (props) => {
  const {
    input,
    disabled,
    className,
    placeholder,
    type,
    parentClassName,
    name,
    style
  } = props;
  return (
    <div className={`${parentClassName}`}>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        disabled={disabled}
        className={className}
        {...input}
        style={style}
      />
    </div>
  );
};

Input.defaultProps = {
  className: '',
  placeholder: '',
  disabled: false,
  //   meta: {},
  //   icon: '',
  type: 'text',
  parentClassName:
    'position-relative d-flex  flex-nowrap align-items-stretch w-100',
  //   iconClassName: '',
  name: ''
};

export default Input;
