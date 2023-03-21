/* useNavigate => permet de nous rediriger vers une route */
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import { CartContext } from '../../contexts/cart.context';

import Button from '../button/button.component';
import CartItem from '../cart-item/cart-item.component';

import './cart-dropdown.styles.scss';

const CartDropdown = () => {
  const { cartItems } = useContext(CartContext);
  // console.log(cartItems);

  // Initialiser la route de navigation
  const navigate = useNavigate(); 
  
  const { isCartOpen, setIsCartOpen } = useContext(CartContext);
  
  const goToCheckoutHandler = () => {
    setIsCartOpen(!isCartOpen);
    navigate('/checkout');
  }
  
  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.map((item) => (
          <CartItem key={item.id} cartItem={item} />
        ))}
      </div>
      <Button children="GO TO CHECKOUT" onClick={goToCheckoutHandler} />
    </div>
  );
}

export default CartDropdown;