import './App.css'
import NavBar from './components/NavBar';
import ItemListCointainer from './components/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer';
import Cart from './components/Cart';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


function App() {
  return(
    <>
    <BrowserRouter>
      <NavBar/>
        <Routes>  
          <Route path='/' element={<ItemListContainer/>}/>
          <Route path='/categoria/:categoriaId' element={<ItemListContainer/>}/>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/item/:id' element={<ItemDetailContainer/>}/>
        </Routes>
    </BrowserRouter>
    </>
  )
}

export default App