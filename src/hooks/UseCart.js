import { useEffect, useState } from "react";
import { getStoredItem } from "../utitity/addCart";

const useCart = (products) => {
  const [cart, setCart] = useState([]);
  useEffect(() => {
    if (products.length) {
      const saveCart = getStoredItem();
      const storedCart = [];
      for (const key in saveCart) {
        const addedProduct = products.find((product) => product.key === key);
        if (addedProduct) {
          const quantity = saveCart[key];
          addedProduct.quantity = quantity;
          storedCart.push(addedProduct);
        }
      }
      setCart(storedCart);
    }
  }, [products]);

  return [cart, setCart];
};

export default useCart;
