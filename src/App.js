import './App.css';
import ItemCount from './components/Header/ItemCount';
import ItemListContainer from './components/ItemListContanier/ItemListContainer';
import NavBar from './components/Navegador/NavBar';

function App() {
  return (
    <div >

      <NavBar />
      <ItemListContainer greeting=""/>
      <ItemCount stock={5} inicial={1} agregar={0}/>
      
    </div>
  );
}

export default App;
