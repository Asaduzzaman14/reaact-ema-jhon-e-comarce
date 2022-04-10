import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './compoonent/About/About';
import Header from './compoonent/Header/Header';
import Inventory from './compoonent/Inventory/Inventory';
import Login from './compoonent/Login/Login';
import Orders from './compoonent/Orders/Orders';
import Shop from './compoonent/Shop/Shop';
import SignUp from './compoonent/SignUp/SignUp';

function App() {
  return (
    <div >
      <Header></Header>
      <Routes>
        <Route path='/' element={<Shop />}></Route>
        <Route path='/shop' element={<Shop />}></Route>
        <Route path='/orders' element={<Orders />} />
        <Route path='/inventory' element={<Inventory />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<SignUp></SignUp>}></Route>
      </Routes>
    </div>
  );
}

export default App;
