import { createContext, useState, useEffect } from "react";

/* Verifier si le produit ajouter existe deja */
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
    console.log(cartItems);
    console.log(productToAdd);

    // return new array with modified cartItems / new cartItem
    return [...cartItems, { ...productToAdd, quantity: 1 }];
}


export const CartContext = createContext({
    isCartOpen: false,
    setIsCartOpen: () => {},
    cartItems: [],
    addItemToCart: () => {},
    cartCount : 0,
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

    /* 
        Compter la quantité totale du panier
        chaque qu'on ajoute un artcile
    */
    useEffect(() => {
        const newCartCount = cartItems.reduce((total, cartItem) => total + cartItem.quantity, 0);

        setCartCount(newCartCount);        
    }, [cartItems]);

    /* productToAdd => produit lorsqu'on clique sur 'ADD TO CARD' */
    const addItemToCart = (productToAdd) => {
      setCartItems(addCartItem(cartItems, productToAdd, addItemToCart));
    };
    console.log(addItemToCart);

    const value = {
      isCartOpen,
      setIsCartOpen,
      addItemToCart,
      cartItems,
      cartCount,
    };

    return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}