import { Fragment } from 'react'

import HeaderClassButton from './HeaderCartButton'

import classes from './Header.module.css'
import mealsImage from '../../assets/meals.jpeg'

const Header = (props) => {
	return (
		<Fragment>
			<header className={classes.header}>
				<h1>Food Order</h1>
				<HeaderClassButton />
			</header>
			<div className={classes['main-image']}>
				<img src={mealsImage} alt="table full of food" />
			</div>
		</Fragment>
	)
}

export default Header
