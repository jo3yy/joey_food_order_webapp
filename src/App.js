import { useState } from 'react'
import Header from './components/Layout/Header'
import Meals from './components/Meals/Meals'
import Cart from './components/Cart/Cart'
import CartProvider from './store/CartProvider'

function App() {
  const [showCart, setShowCart] = useState(false) //change this to useContext

  const showCartHandler = () => {
    setShowCart(true)
  }

  const hideCartHander = () => {
    setShowCart(false)
  }

  return (
    <CartProvider>
      {showCart && <Cart onClose={hideCartHander} />}
      <Header onShowCart={showCartHandler} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
