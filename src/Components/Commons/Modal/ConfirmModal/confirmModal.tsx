import React from 'react'
import { Button } from 'react-bootstrap'
import ReactDOM from 'react-dom';
import './confirmModal.scss'

interface ConfirmModalProps {
  submitAction: () => void;
  cancelAction: () => void;
  message: string;
}

export default function confirmModal({ submitAction, cancelAction, message }: ConfirmModalProps) {
  return ReactDOM.createPortal(
      <div  className="modal-wrapper modal-active">
          <div className='modal-content'>
            <p> {message} </p>
            <div>
                <Button variant='danger' onClick={() => cancelAction()}> خیر </Button>
                <Button variant='success' onClick={() => submitAction()}> بله </Button>
            </div>
          </div>
      </div>,
    document.getElementById('modal-wrapper') as HTMLElement
  )
}
