import React from 'react';
import {useEffect} from 'react'
import { useSelector, useDispatch } from "react-redux";
import {SetProductList, AddToCart} from '../actions'
import data from './data.json'

function ProductList() {
 const products = useSelector((state) => state.products)
 const cart = useSelector((state) => state.cart)

const dispatch = useDispatch();

     useEffect(() => {
       let mounted = true;
       if (mounted) {
        dispatch(SetProductList(data))
       }

       return () => {
         mounted = false;
       };
     }, []);

    // 

  return (
    <div>
     
      <ul>
        {products.map((product) => {
          return (
            <li key={product.id}>
              <img
                style={{ width: "100px", height: "100px" }}
                src={product.image}
              />
              {product.title}
              <br />
              Price :{product.price}$
              <button onClick={() => {cart.filter(item => item.id === product.id).length ===0 ? dispatch(AddToCart(product)) : alert("Product already in Cart.")}}>
                Add to Cart
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  ); 
}

export default ProductList;


