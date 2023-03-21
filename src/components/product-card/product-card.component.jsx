import { useContext } from 'react';

import { CartContext } from '../../contexts/cart.context';

import Button from '../button/button.component';

import './product-card.styles.scss';

const ProductCard = ({ product }) => {
  console.log('Product', product);
  const { name, price, imageUrl } = product;

  const { addItemToCart } = useContext(CartContext);
  console.log('Add item to cart: ', addItemToCart);

  const addProductToCart = () => addItemToCart(product);

  return (
    <div className="product-card-container">
      <img src={imageUrl} alt={name} />
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">
          <strong>{price}</strong>€
        </span>
      </div>
      <Button
        buttonType="inverted"
        children="Add to card"
        onClick={addProductToCart}
      />
    </div>
  );
}
 
export default ProductCard;