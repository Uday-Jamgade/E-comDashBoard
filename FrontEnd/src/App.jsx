import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Nav from './component/Nav';
import Footer from './component/Footer';
import './App.css'
import SignUp from './component/SignUp';
import PrivateComponent from './component/PrivateComponent';
import AddProduct from './component/AddProduct';
import Login from './component/Login';
import ProductList from './component/ProductList';
import UpdateProduct from './component/UpdateProduct';


function App() {

  return (
    <>
      <BrowserRouter>
      <Nav/>
      <Routes> 

        <Route element={<PrivateComponent/>}> 
      <Route path='/' element={<ProductList/>}></Route>
      <Route path='/add' element={<AddProduct/>}></Route>
      <Route path='/update/:id' element={<UpdateProduct/>}></Route>
      <Route path='/logout' element={<h1>done</h1>}></Route>
      {/* <Route path='/profile' element={<h1></h1>}></Route> */}
    
      </Route>
      <Route path='/signup' element={<SignUp/>}></Route>
      <Route path='/login' element={<Login/>}></Route>
      </Routes>

    
      </BrowserRouter>
      <Footer/>


     
    </>
  )
}

export default App
