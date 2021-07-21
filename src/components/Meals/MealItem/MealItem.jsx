import { useContext } from 'react'

import MealItemForm from './MealItemForm'
import CartContext from '../../../store/CartContext'

import classes from './MealItems.module.css'


const MealItem = (props) => {
	const cartCtx = useContext(CartContext)
	const price = `$${props.price.toFixed(2)}`
	
	// console.log(cartCtx)

	const totalAmount = cartCtx.totalAmount


	const addToCartHandler = (amount) => {
		cartCtx.addItem({
			id: props.id,
			name: props.name,
			price: props.price,
			amount
		})
	}

	return (
		<li className={classes.meal}>
			<div>
				<h3>{props.name}</h3>
				<div className={classes.description}>{props.description}</div>
				<div className={classes.price}>{price}</div>
			</div>
			<div>
				<MealItemForm id={props.id} onAddToCart={addToCartHandler} />
			</div>
		</li>
	)
}

export default MealItem
