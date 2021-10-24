import React from "react";
import { useHistory } from "react-router";
import useCart from "../../hooks/UseCart";
import useProduct from "../../hooks/useProduct";
import { addToDb } from "../../utitity/addCart";
import Cart from "../Cart/Cart";
import Product from "../Product/Product";

const Products = () => {
  const [product] = useProduct();
  const [cart, setCart] = useCart(product);

  const hendelAddToCart = (product) => {
    const exisit = cart.find((pd) => pd.key === product.key);
    let newProduct = [];
    if (exisit) {
      const rest = cart.filter((pd) => pd.key !== product.key);
      exisit.quantity = exisit.quantity + 1;
      newProduct = [...rest, exisit];
    } else {
      product.quantity = 1;
      newProduct = [...cart, product];
    }
    setCart(newProduct);
    // console.log(newProduct);
    addToDb(product.key);
  };

  const history = useHistory();
  const orderHendel = () => {
    history.push("/order");
  };
  return (
    <div className="container-fluid">
      <div className="row mt-5">
        <div className="col-sm-12 col-md-9 col-lg-9">
          {product.map((product) => (
            <Product
              product={product}
              key={product.key}
              hendelAddToCart={hendelAddToCart}
            />
          ))}
        </div>
        <div className="col-12 col-sm-12 col-md-3 col-lg-3">
          <Cart cart={cart}>
            <button onClick={orderHendel} className="btn btn-sm btn-warning">
              Review Order
            </button>
          </Cart>
        </div>
      </div>
    </div>
  );
};

export default Products;
