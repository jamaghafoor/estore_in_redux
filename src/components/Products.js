import React from "react";
import {Link} from 'react-router-dom';
import { useEffect } from "react";
import { useDispatch,useSelector } from "react-redux";
import {productReducer} from '../reducers/productReducer';
import { loadProducts } from "../actions/productAction";
export default function Products() {
  const dispatch = useDispatch();
  const products = useSelector(state => state.productReducer.products);
  console.log(products, 'products');
  useEffect(() => {
    loadAllProducts(); 
  }, []);

  const loadAllProducts = async () => {
    await fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => {
        const data = json;
        dispatch(loadProducts(data));
      });
  };

  return (
    <>
      <div className="heading container">
        <h2>NEW COLLECTION</h2>
      </div>
      {
        products.map((product,i) =>
        <Link className="product-card" to={`/product/${product.id}`} key={i}>
          <div className="product-tumb">
            <img src={product.image} alt="" />
          </div>
          <div className="product-details">
            <h4>
              <a href="">{product.category}</a>
            </h4>
            <p>{product.description}</p>
            <div className="product-bottom-details">
              <div className="product-price">
                <small></small>${product.price}
              </div>
              <div className="product-links">
                <a href="">
                  <i className="fa fa-heart"></i>
                </a>
                <a href="">
                  <i className="fa fa-shopping-cart"></i>
                </a>
              </div>
            </div>
          </div>
        </Link>
        )
      }    
       
    
    </>
  );
}
