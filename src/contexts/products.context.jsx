import { createContext, /*useEffect,*/ useState } from "react";

import { /*addCollectionAndDocuments*/ } from "../utils/firebase/firebase.utils";

// import PRODUCTS from '../shop-data.json';  => Données d'un produits

/*
    Données de la boutique une fois les données dans firebase nous pouvons le
    supprimer 
*/
// import SHOP_DATA from "../shop-data";

/*
    Initialiser le context

    Chaque fois qu'on Initialise un contexte il lui faut un fournisseur (provider)
 */
export const ProductsContext = createContext({
    products: [],
});

/*  Fournisseur de produit */
export const ProductsProvider = ({ children }) => {
    // const [products, setProducts] = useState(PRODUCTS);

    const [products, setProducts] = useState([]);
    console.log(setProducts);
 
    /*
        -> Ajouter la collection dans la bdd
        -> Il faut lancer le useEffect 1 fois pour éviter de recharcger une nvlle collection
    */
    /*  
        useEffect(() => {
        // categories => Le nom qu'aura la collection dans firestrom 
            addCollectionAndDocuments('categories', SHOP_DATA, 'title');
        }, []);
    */
    
    const value = { products }

    return (<ProductsContext.Provider value={value}>{ children }</ProductsContext.Provider>);
}