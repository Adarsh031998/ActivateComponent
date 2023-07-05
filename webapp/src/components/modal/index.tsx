import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import PropTypes from 'prop-types';
import { FunctionComponent } from 'react';
interface Index {
  show: boolean;
  className?: string;
  size?: string;
  handleClose?: () => void;
  modalTitle: string;
  modalBody: any;
  handleSubmit?: () => void;
  closeBtnText?: string;
  submitBtnText?: string;
  closeBtnClass?: string;
  submitBtnClass?: string;
  style?: any;
}
const CustomModal: FunctionComponent<Index> = (props) => {
  const {
    show,
    className,
    size,
    handleClose,
    modalTitle,
    modalBody,
    handleSubmit,
    closeBtnText,
    submitBtnText,
    closeBtnClass,
    submitBtnClass,
    style
  } = props;
  return (
    <Modal
      show={show}
      onHide={handleClose}
      backdrop="static"
      className={className}
      size={size}
      style={style}
    >
      <Modal.Header closeButton>
        <Modal.Title>{modalTitle}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{modalBody}</Modal.Body>
      <Modal.Footer>
        <Button
          variant="secondary"
          onClick={handleClose}
          className={closeBtnClass}
        >
          {closeBtnText}
        </Button>
        <Button
          variant="primary"
          onClick={handleSubmit}
          className={submitBtnClass}
        >
          {submitBtnText}
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
CustomModal.defaultProps = {
  size: 'md',
  submitBtnText: 'Continue',
  closeBtnText: 'close'
};
export default CustomModal;
