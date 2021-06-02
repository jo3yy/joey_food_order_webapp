import { Fragment, useState } from 'react'
import Header from './components/Layout/Header'
import Meals from './components/Meals/Meals'
import Cart from './components/Cart/Cart'

function App() {
  const [showCart, setShowCart] = useState(false) //change this to useContext

  const showCartHandler = () => {
    setShowCart(true)
  }

  const hideCartHander = () => {
    setShowCart(false)
  }

  return (
    <Fragment>
      {showCart && <Cart onClose={hideCartHander} />}
      <Header onShowCart={showCartHandler} />
      <main>
        <Meals />
      </main>
    </Fragment>
  );
}

export default App;
