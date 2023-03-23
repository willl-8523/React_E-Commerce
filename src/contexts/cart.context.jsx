import { createContext, useState, useEffect } from "react";

/* Ajouter un produit dans le panier */
const addCartItem = (cartItems, productToAdd) => {
    // find if cartItems contains productToAdd (check by id)
    const existingCartItem = cartItems.find((cartItem) =>
        cartItem.id === productToAdd.id
    );

    // If found, increment quantity
    if (existingCartItem) {

        return cartItems.map((cartItem) =>
            cartItem.id === productToAdd.id
                ? { ...cartItem, quantity: cartItem.quantity + 1}
                : cartItem 
        );
    }
    // console.log(cartItems);
    // console.log(productToAdd);

    // return new array with modified cartItems / new cartItem
    return [...cartItems, { ...productToAdd, quantity: 1 }];
}

/*  
    Retirer un produit du panier
    cartItems => tableau des articles du panier
    cartItemToRemove => produit qu'on souhaite retirer
*/
const removeCartItem = (cartItems, cartItemToRemove) => {

  // Rechercher l'article du panier à supprimer
  const existingCartItem = cartItems.find(
      (cartItem) => cartItem.id === cartItemToRemove.id
  );

  // Vérifier si la quantité est égale à 1, si c'est le cas retirer l'article du panier(panier)
  if (existingCartItem.quantity === 1) {
      return cartItems.filter(
        (cartItem) => cartItem.id !== cartItemToRemove.id
      );
  }

  // sinon renvoyer les articles du panier avec l'article du panier correspondant avec une quantité réduite
  return cartItems.map((cartItem) =>
    cartItem.id === cartItemToRemove.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
}

const clearCartItem = (cartItems, cartItemToClear) => {
  return cartItems.filter((cartItem) => cartItem.id !== cartItemToClear.id);
}


export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItems: [],
  addItemToCart: () => {},
  removeItemFromCart: () => {},
  clearItemFromCart: () => {},
  cartCount : 0,
  cartTotal: 0,
});

/*  
    product: {
        id,
        name,
        proce,
        imageUrl,
    }

    cartItem: {     =>  cartItem {
        id,                 ...product,
        name,               quantity,
        proce,          }
        imageUrl,       
        quantity,       
    }
*/

export const CartProvider = ({children}) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const [cartTotal, setCartTotal] = useState(0);

  /* 
    Compter la quantité totale du panier
    chaque qu'on ajoute un artcile
  */
  useEffect(() => {
    const newCartCount = cartItems.reduce(
      (total, cartItem) => total + cartItem.quantity,
      0
    );

    setCartCount(newCartCount);
  }, [cartItems]);

  /* 
    Calculer la somme totale du panier
    chaque fois qu'on ajoute un artcile
  */
  useEffect(() => {
    const newTotal = cartItems.reduce(
      (totalCart, cartItem) => totalCart + cartItem.quantity * cartItem.price,
      0
    );

    setCartTotal(newTotal);
  }, [cartItems]);

  /* productToAdd => produit lorsqu'on clique sur 'ADD TO CARD' */
  const addItemToCart = (productToAdd) => {
    setCartItems(addCartItem(cartItems, productToAdd, addItemToCart));
  };
  // console.log(addItemToCart);

  // cartItemToRemove => le produit que l'on souhaite retirer du panier
  const removeItemToCart = (cartItemToRemove) => {
    setCartItems(removeCartItem(cartItems, cartItemToRemove));
  };
  // console.log(removeItemToCart);

  /*  Reset article 
      cartItemToClear => l'article q'on souhaite reset
  */
  const clearItemFromCart = (cartItemToClear) => {
    setCartItems(clearCartItem(cartItems, cartItemToClear));
  };
  // console.log(removeItemToCart);

  const value = {
    isCartOpen,
    setIsCartOpen,
    addItemToCart,
    removeItemToCart,
    clearItemFromCart,
    cartItems,
    cartCount,
    cartTotal,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}