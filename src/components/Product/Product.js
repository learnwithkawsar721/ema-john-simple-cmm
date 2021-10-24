import React from "react";
import Rating from "react-rating";
import "./Product.css";
const Product = (props) => {
  const { name, img, seller, price, star } = props.product;
  const {hendelAddToCart}=props;
  return (
    <div className="col-12">
      <div className="card mb-3">
        <div className="row g-0">
          <div className="col-md-4">
            <img
              src={img}
              className="img-fluid rounded-start text-center m-auto"
              alt="..."
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title text-primary">{name}</h5>
              <p className="card-text">by : {seller}</p>
              <div className="d-flex justify-content-between">
                <div className="price">
                  <h2>${price}</h2>
                </div>
                <div className="ratting">
                  <Rating
                    readonly
                    initialRating={star}
                    emptySymbol="far fa-star star_style"
                    fullSymbol="fas fa-star star_style"
                  />
                </div>
              </div>
              <button onClick={()=>hendelAddToCart(props.product)} className="btn btn-sm btn-warning">
                {" "}
                <i className="fas fa-shopping-cart"></i> Add Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
