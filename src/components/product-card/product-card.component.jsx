import Button from '../button/button.component';

import './product-card.styles.scss';

const ProductCard = ({ product }) => {
    const { name, price, imageUrl } = product;

    return (
      <div className="product-card-container">
        <img src={imageUrl} alt={name} />
        <div className="footer">
          <span className="name">{name}</span>
          <span className="price"><strong>{price}</strong>€</span>
        </div>
        <Button buttonType="inverted" children="Add to card" />
      </div>
    );
}
 
export default ProductCard;