import React from 'react'
import './App.css'
import ProductList from './components/productList'
import Cart from './components/cart'
function App() {

  return (
    <div className="App">
      <h1>PRODUCTS : </h1>
      <ProductList/>
      <Cart/>
    </div>
  )
}

export default App
