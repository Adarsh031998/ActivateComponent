import { ReactNode, FunctionComponent } from 'react';
import { mergeCls } from '@/utils/helper';

/* Button interface */
interface ButtonPros {
  type: 'button' | 'submit' | 'reset';
  children: ReactNode | ReactNode[];
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
  style?: any;
}

/**
 * Button component
 * @param {*} props
 * @returns
 */
const Index: FunctionComponent<ButtonPros> = (props) => {
  const { children, className, onClick, type, disabled, style } = props;
  return (
    <button
      disabled={disabled}
      type={type}
      onClick={onClick}
      style={style}
      className={className}
    >
      {children}
    </button>
  );
};

Index.defaultProps = {
  disabled: false,
  className: 'px-1 py-1',
  onClick: () => void 0
};

export default Index;
