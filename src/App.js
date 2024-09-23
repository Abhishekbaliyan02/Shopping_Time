import { Collection } from './components/Collection';
import { Home } from './components/Home';
import { Navbar } from './components/Navbar';
import { Cart } from './components/Cart';
import { Login } from './components/Login';
import { Error } from './components/Error';
import { Contact } from './components/Contact';
import { Route, Routes } from 'react-router-dom'
import { Footer } from './components/Footer';
import { Productitem } from './components/Productitem';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { PlaceOrder } from './components/PlaceOrder';
import { Orders } from './components/Orders';
import { About } from './components/About';

function App() {
  return (
<>
    <ToastContainer/>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/Collection' element={<Collection/>}/>
      <Route path='/About' element={<About/>}/>
      <Route path='/Contact' element={<Contact/>}/>
      <Route path='/Productitem/:productid' element={<Productitem/>}/>
      <Route path='/Cart' element={<Cart/>}/>
      <Route path='/PlaceOrder' element={<PlaceOrder/>}/>
      <Route path='/Login' element={<Login/>}/>
      <Route path='/Orders' element={<Orders/>}/>
      <Route path='*' element={<Error/>}/>
    </Routes>
    <Footer/>
    </>
  );
}

export default App;
