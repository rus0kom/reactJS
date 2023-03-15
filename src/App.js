import './App.css'
import NavBar from './components/NavBar';
import ItemListCointainer from './components/ItemListContainer'


function App() {
  return(
    <>
    <NavBar/>
    <ItemListCointainer texto= 'MENSAJE POR PROPS'/>
    </>
  )
}

export default App;
