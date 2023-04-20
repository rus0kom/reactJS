import './App.css'
import React from 'react';
import NavBar from './components/NavBar';
import ItemListCointainer from './components/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer';
import Cart from './components/Cart';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CartProvider from './CartContext';

function App() {
  return(
    <>
    <BrowserRouter>
        <CartProvider>
          <NavBar/>
          <Routes>  
            <Route path='/' element={<ItemListContainer/>}/>
            <Route path='/categoria/:categoriaId' element={<ItemListContainer/>}/>
            <Route path='/cart' element={<Cart/>}/>
            <Route path='/item/:id' element={<ItemDetailContainer/>}/>
          </Routes>
        </CartProvider>
    </BrowserRouter>
    </>
  )
}

export default App