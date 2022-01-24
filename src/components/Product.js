import React from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getProduct,productInCart } from "../actions/productAction";
import { productReducer } from "../reducers/productReducer";
import "./style.css";
export default function Product() {
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    loadProduct();
  }, []);

  const loadProduct = () => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((json) => {
        const data = json;
        dispatch(getProduct(data));
      });
  };

  const product = useSelector((state) => state.productReducer.product);
  const addToCart = () =>{
    dispatch(productInCart(product))
  }

  return (
    <div>
      <div
        className="container"
        style={{ marginBottom: "100px", marginTop: "50px" }}
      >
        <div className="heading-section">
          <h2>Product Details</h2>
        </div>

        <div className="row">
          <div className="col-md-6">
            <div id="slider" className="owl-carousel product-slider">
              <div className="item">
                <img src={product.image} width="500px" height="400px" />
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="product-dtl">
              <div className="product-info">
                <div className="product-name">{product.title}</div>
                <div className="reviews-counter">
                  <div className="rate">
                    <input type="radio" id="star5" name="rate" />
                    <label htmlFor="star5" title="text">
                      5 stars
                    </label>
                    <input type="radio" id="star4" name="rate" />
                    <label htmlFor="star4" title="text">
                      4 stars
                    </label>
                    <input type="radio" id="star3" name="rate" />
                    <label htmlFor="star3" title="text">
                      3 stars
                    </label>
                    <input type="radio" id="star2" name="rate" />
                    <label htmlFor="star2" title="text">
                      2 stars
                    </label>
                    <input type="radio" id="star1" name="rate" />
                    <label htmlFor="star1" title="text">
                      1 star
                    </label>
                  </div>
                  <div>
                    <span>123 Reviews</span>
                  </div>
                </div>
                <div className="product-price-discount">
                  <span>{product.price}</span>
                  <span className="line-through">$29.00</span>
                </div>
              </div>
              <p>{product.description}</p>
              <div className="row">
                <div className="col-md-6">
                  <label htmlFor="size">Size</label>
                  <select id="size" name="size" className="form-control">
                    <option>S</option>
                    <option>M</option>
                    <option>L</option>
                    <option>XL</option>
                  </select>
                </div>
                <div className="col-md-6">
                  <label htmlFor="color">Color</label>
                  <select id="color" name="color" className="form-control">
                    <option>Blue</option>
                    <option>Green</option>
                    <option>Red</option>
                  </select>
                </div>
              </div>
              <div className="product-count">
                <a className="round-black-btn" onClick={() => addToCart()}>
                  Add to Cart
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
