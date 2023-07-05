import Toast from 'react-bootstrap/Toast';
import { FunctionComponent } from 'react';
import InlineSvg from '@/components/inline-svg';
interface CustomToast {
  show: boolean;
  className?: string;
  handleClose?: () => void;
  toastTitle: string;
  toastTitleMessage: string;
  toastBody: any;
  iconClassName?: string;
  icon?: any;
  style?: any;
}
const Index: FunctionComponent<CustomToast> = (props) => {
  const {
    show,
    handleClose,
    className,
    toastTitle,
    toastTitleMessage,
    toastBody,
    iconClassName,
    icon,
    style
  } = props;
  return (
    <Toast
      show={show}
      onClose={handleClose}
      className={className}
      style={style}
    >
      <Toast.Header>
        <InlineSvg
          className={iconClassName}
          src={icon}
          width={16}
          height={16}
        />
        <strong className="me-auto">{toastTitle}</strong>
        <small>{toastTitleMessage}</small>
      </Toast.Header>
      <Toast.Body>{toastBody}</Toast.Body>
    </Toast>
  );
};

export default Index;
