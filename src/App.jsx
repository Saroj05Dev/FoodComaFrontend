import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './Pages/Home'
import Signup from './Pages/Auth/Signup'
import Login from './Pages/Auth/Login'
import NotFound from './Pages/NotFound'
import Denied from './Pages/Denied'
import AddProduct from './Pages/Admin/AddProduct'
import Products from './Pages/Products'
import ProductDetails from './Pages/ProductDetails'
import CartDetails from './Pages/Cart/CartDetails.'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/' element={<Denied />} />
        <Route path='/auth/signup' element={<Signup />} />
        <Route path='/auth/login' element={<Login />} />
        <Route path='/products' element={<Products />} />
        <Route path='/products/:productId' element={<ProductDetails />} />
        <Route path='/carts' element={<CartDetails />} />

        <Route path='/admin/add-product' element={<AddProduct />} />

        <Route path='*' element={<NotFound />} />
      </Routes>
    </>
  )
}

export default App
