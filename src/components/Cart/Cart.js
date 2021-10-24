import React from "react";

const Cart = (props) => {
  const { cart, length } = props;

  let totalquantity = 0;
  let price = 0;
  for (const item of cart) {
    if (!item.quantity) {
      item.quantity = 1;
    }
    price = price + item.price * item.quantity;
    totalquantity = totalquantity + item.quantity;
  }
  const shipping = price > 0 ? 15 : 0;
  const tax = (price * shipping) / 100;
  const total = price + shipping + tax;
  return (
    <div className="card">
      <h3 className="card-title text-center">Order Summary</h3>
      <h4 className="card-title text-center">
        Items ordered:{length ? length : totalquantity}
      </h4>
      <div className="card-body">
        <p className="card-text">Price : {price.toFixed(2)} </p>
        <p className="card-text">Shipping : {shipping} </p>
        <p className="card-text">
          Total before tax: {tax ? tax.toFixed(2) : 0}{" "}
        </p>
        <h3 className="card-title text-danger">
          Order Total:{total ? total.toFixed(2) : 0}
        </h3>
        {props.children}
      </div>
    </div>
  );
};

export default Cart;
