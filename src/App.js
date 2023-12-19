import './App.css';
import Navbar from './Components/Navbar/Navbar';
import {BrowserRouter,Routes, Route} from 'react-router-dom'; 
import Shop from './Pages/Shop';
import ShopCatergory from './Pages/ShopCatergory';
import Products from './Pages/Products';
import Cart from './Pages/Cart';
import Login from './Pages/Login';
import Footer from './Components/Footer/Footer';
import men_banner from './Components/Assets/banner_mens.png'
import women_banner from './Components/Assets/banner_women.png'
import kids_banner from './Components/Assets/banner_kids.png'

function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Shop/>}/>
        <Route path='/men' element={<ShopCatergory banner ={men_banner} category ='men'/>}/>
        <Route path='/women' element={<ShopCatergory banner ={women_banner} category ='women'/>}/>
        <Route path='/kids' element={<ShopCatergory banner ={kids_banner} category ='kids'/>}/>
        <Route path='product' element={<Products/>}>
          <Route path=':productId' element={<Products/>}/>
        </Route>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/login' element={<Login/>}/>
      </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
