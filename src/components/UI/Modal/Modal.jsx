import React from 'react'
import ReactDOM from 'react-dom'

import { ModalBackdrop } from './ModalBackdrop'
import { ModalOverlay } from './ModalOverlay'
// import classes from './Modal.module.css'

const portalELement = document.getElementById('overlay')

const Modal = (props) => {
	return (
		<React.Fragment>
			{ReactDOM.createPortal(<ModalBackdrop onClose={props.onClose} />, portalELement)}
			{ReactDOM.createPortal(
				<ModalOverlay>{props.children}</ModalOverlay>,
				portalELement
			)}
		</React.Fragment>
	)
}

export default Modal
