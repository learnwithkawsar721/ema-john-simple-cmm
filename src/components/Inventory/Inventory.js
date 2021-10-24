import React from "react";
import img from "../../image/giphy.gif";
const Inventory = () => {
  return (
    <div className="row">
      <div className="col-6">
        <h1>Inventory Management</h1>
        <img src={img} alt="" />
      </div>
      <div className="col-6">
        <h1>Order Completed</h1>
      </div>
    </div>
  );
};

export default Inventory;
