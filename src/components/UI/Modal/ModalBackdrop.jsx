import classes from './Modal.module.css'

export const ModalBackdrop = (props) => {
	return <div className={classes.backdrop} onClick={props.onClose} />
}

