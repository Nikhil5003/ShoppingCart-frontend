import { createContext, useContext, useReducer } from "react";
import { faker } from "@faker-js/faker";
import { cartReducer, productReducer } from "./Reducers";
const Cart = createContext();
faker.seed(99);
const Context = ({ children }) => {
  const products = [...Array(100)].map(() => ({
    id: faker.datatype.uuid(),
    name: faker.commerce.productName(),
    price: faker.commerce.price(),
    image: faker.image.url(),
    inStock: Math.ceil(Math.random() * 10),
    fastDelivery: faker.datatype.boolean(),
    ratings: Math.ceil(Math.random() * 5),
  }));
  const [state, dispatch] = useReducer(cartReducer, {
    products: products,
    cart: [],
  });
  const [productState, productDispatch] = useReducer(productReducer, {
    byStock: false,
    byFastDelivery: false,
    byRating: 0,
    searchQuery: "",
  });
  return (
    <Cart.Provider value={{ state, dispatch, productDispatch, productState }}>
      {children}
    </Cart.Provider>
  );
};
export const CartState = () => {
  return useContext(Cart);
};
export default Context;
