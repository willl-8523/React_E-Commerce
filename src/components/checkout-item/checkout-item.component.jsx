import { useContext } from 'react';

import { CartContext } from '../../contexts/cart.context';


import './checkout-item.styles.scss';

const CheckoutItem = ({ cartItem }) => {
    const { name, imageUrl, price, quantity } = cartItem;

    const { addItemToCart, removeItemToCart, clearItemFromCart } = useContext(CartContext);

    const addItemHandle = () => addItemToCart(cartItem);
    const removeItemHandle = () => removeItemToCart(cartItem);
    const clearItemHandle = () => clearItemFromCart(cartItem);


    return (
      <div className="checkout-item-container">
        <div className="image-container">
          <img src={imageUrl} alt={name} />
        </div>
        <span className="name"> {name} </span>
        <div className="arrow"></div>
        <span className="quantity">
          <div className="arrow" onClick={addItemHandle}>
            &#10094;
          </div>
          <span className="value">{quantity}</span>
          <div className="arrow" onClick={removeItemHandle}>
            &#10095;
          </div>
        </span>
        <span className="price"> {price} </span>
        <div className="remove-button" onClick={clearItemHandle}>
          &#10005;
        </div>
      </div>
    );
}
 
export default CheckoutItem;