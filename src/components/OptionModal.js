import React from 'react';
import Modal from 'react-modal';

const OptionModal = (props) => {
  return (
    <Modal
    isOpen={!!props.optionModal}
    onRequestClose={props.clearModal}
    contentLabel = "Selected Option"
    closeTimeoutMS = {300}
    className="modal"
    >
<h3 className="modal__title">Selected Option</h3>
  {props.optionModal &&   <p className="modal__body">{props.optionModal}</p>}
  <button className="button" onClick={props.clearModal}>Okay</button>
    </Modal>

  )
}

export default OptionModal;