import React from "react";
import { useHistory } from "react-router";
import useCart from "../../hooks/UseCart";
import useProduct from "../../hooks/useProduct";
import { clearCart, removeDb } from "../../utitity/addCart";
import Cart from "../Cart/Cart";
import Review from "../Review/Review";

const Order = () => {
  const [product] = useProduct();
  const [cart, setCart] = useCart(product);
  const hendelRmove = (key) => {
    const newCart = cart.filter((product) => product.key !== key);
    setCart(newCart);
    removeDb(key);
  };
  const history = useHistory();
  const orderHendel = () => {
    history.push("/inventory");
    setCart("");
    clearCart();
  };
  return (
    <div className="container-fluid">
      <div className="row mt-5">
        <div className="col-sm-12 col-md-9 col-lg-9">
          {cart.map((product) => (
            <Review
              product={product}
              hendelRmove={hendelRmove}
              key={product.key}
            />
          ))}
        </div>
        <div className="col-12 col-sm-12 col-md-3 col-lg-3">
          <Cart cart={cart} length={cart.length}>
            <button onClick={orderHendel} className="btn btn-sm btn-warning">
              Order Done
            </button>
          </Cart>
        </div>
      </div>
    </div>
  );
};

export default Order;
