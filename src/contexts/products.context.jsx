import { createContext, useState } from "react";

import PRODUCTS from '../shop-data.json';

/*
    Initialiser le context

    Chaque fois qu'on Initialise un contexte il lui faut un fournisseur (provider)
 */
export const ProductsContext = createContext({
    products: [],
});

/*  Fournisseur de produit */
export const ProductsProvider = ({ children }) => {
    const [products, setProducts] = useState(PRODUCTS);
    console.log(setProducts);
    
    const value = { products }

    return (<ProductsContext.Provider value={value}>{ children }</ProductsContext.Provider>);
}