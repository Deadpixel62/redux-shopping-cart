import React from 'react';
import { useSelector, useDispatch } from "react-redux";
import {PlusItem, MinusItem, DeleteItem, Checkout} from '../actions'

function Cart() {
    const cart = useSelector((state) => state.cart);
    const totalPrice = useSelector((state) => state.price);
   
    
    const dispatch = useDispatch();

  return (
    <div>
    {cart.length>0 ? <div>
            {" "}
            <ul
              style={{ display: "flex", flexDirection: "column", gap: "20px" }}
            >
              {cart.map((item) => {
                return (
                  <li
                    key={item.id}
                    style={{
                      display: "flex",
                      justifyContent: "space-around",
                      alignItems: "center",
                    }}
                  >
                    <span
                      style={{
                        display: "flex",
                        gap: "15px",
                        alignItems: "center",
                      }}
                    >
                      <img
                        style={{ width: "50px", height: "50px" }}
                        src={item.image}
                      />
                      <span>{item.title}</span>
                    </span>
                    {item.price}$
                    <span>
                      <button onClick={() => dispatch(MinusItem(item))}>
                        -
                      </button>
                      <span>Qt: {item.units} </span>
                      <button onClick={() => dispatch(PlusItem(item))}>
                        +
                      </button>
                    </span>
                    <button onClick={() => dispatch(DeleteItem(item))}>
                      x
                    </button>
                  </li>
                );
              })}
            </ul>
            Total price: {totalPrice}$
            <p>
              Number of items :{" "}
              {cart.reduce((counter, item) => (counter += item.units), 0)}
            </p>
            <button onClick={() => dispatch(Checkout())}>Checkout</button>
          </div> : ""}
       
          
        
    
   
    </div>
  );
}

export default Cart;
