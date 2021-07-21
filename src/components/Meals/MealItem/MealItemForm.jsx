import { useRef, useState } from 'react'

import Input from '../../UI/Input'

import classes from './MealItemForm.module.css'

const MealItemForm = (props) => {
  const [amountIsValid, setAmountIsValid] = useState(true)


	const amountInputRef = useRef()

	const submitHandler = (event) => {
		event.preventDefault()

		const enteredAmountRef = amountInputRef.current.value
		const enteredAmount = +enteredAmountRef //converts to a number

		if (
			enteredAmountRef.trim().length === 0 ||
			enteredAmountRef < 1 ||
			enteredAmountRef > 5
		) {
      setAmountIsValid(false)
			return
		}
    
    props.onAddToCart(enteredAmount)
	}

	return (
		<form className={classes.form} onSubmit={submitHandler}>
			<Input
				label="Amount"
				input={{
					id: 'amount',
					type: 'number',
					min: '1',
					max: '5',
					step: '1',
					default: '1',
				}}
				ref={amountInputRef}
			/>
			<button>+ Add</button>
      {!amountIsValid && <p>Please enter a valid amount (1-5).</p> }
		</form>
	)
}

export default MealItemForm
