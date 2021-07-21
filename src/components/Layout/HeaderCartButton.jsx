import { useContext, useEffect, useState } from 'react'

import CartIcon from '../Cart/CartIcon'
import CartContext from '../../store/CartContext'
import classes from './HeaderCartButton.module.css'


const HeaderCartButton = (props) => {
  const [btnHighlighted, setBtnHiglighted] = useState(false)

  const cartCtx = useContext(CartContext)
  const { items } = cartCtx

  const numberOfCartItems = items.reduce((curNum, item) => {
    return curNum + item.amount
  }, 0)


  const btnClasses = `${classes.button} ${btnHighlighted ? classes.bump : ''}`

  useEffect(() => {
    if (items.length === 0) {
      return
    }
    setBtnHiglighted(true)

    const timer = setTimeout(() => {
      setBtnHiglighted(false)
    }, 300)

    return () => {
      clearTimeout(timer)
    }
  }, [items])

  return (
    <button className={btnClasses} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numberOfCartItems}</span>
    </button>    
  )
}

export default HeaderCartButton