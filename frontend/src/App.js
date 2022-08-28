import React from 'react'
import { Container } from 'react-bootstrap'
import Header from './components/Header'
import Footer from './components/Footer'
import Homepage from './pages/Homepage'
import ProductScreen from './pages/ProductScreen'
import CartScreen from './pages/CartScreen'
import LoginScreen from './pages/LoginScreen'
import RegisterScreen from './pages/RegisterScreen'
import ProfileScreen from './pages/ProfileScreen'
import ShippingScreen from './pages/ShippingScreen'
import PaymentScreen from './pages/PaymentScreen'
import PlaceOrderScreen from './pages/PlaceOrderScreen'
import OrderScreen from './pages/OrderScreen'
import UserListScreen from './pages/UserListScreen'
import UserEditScreen from './pages/UserEditScreen'
import ProductListScreen from './pages/ProductListScreen'
import ProductEditScreen from './pages/ProductEditScreen'
import OrderListScreen from './pages/OrderListScreen'
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom'

const App = () => {
  return (
    <Router>
      <Header/>
        <main className='py-3'>
          <Container>
            <Routes>
              <Route path='/' element={<Homepage/>} exact />
              <Route path='/login' element={<LoginScreen/>} />
              <Route path='/register' element={<RegisterScreen/>} />
              <Route path='/profile' element={<ProfileScreen/>} />
              <Route path='/product/:id' element={<ProductScreen/>} />
              <Route path='/shipping' element={<ShippingScreen/>} />
              <Route path='/cart' element={<CartScreen/>} />
              <Route path='/cart/:id' element={<CartScreen/>}  />
              <Route path='/payment' element={<PaymentScreen/>} />
              <Route path='/placeorder' element={<PlaceOrderScreen/>} />
              <Route path='/order/:id' element={<OrderScreen/>} />
              <Route path='/admin/userlist' element={<UserListScreen/>} />
              <Route path='/admin/user/:id/edit' element={<UserEditScreen/>} />
              <Route path='/admin/productlist' element={<ProductListScreen/>} exact />
              <Route path='/admin/productlist/:pageNumber' element={<ProductListScreen/>} exact />
              <Route path='/admin/product/:id/edit' element={<ProductEditScreen/>} />
              <Route path='/admin/orderlist' element={<OrderListScreen/>} />
              <Route path='/search/:keyword' element={<Homepage/>} exact />
              <Route path='/page/:pageNumber' element={<Homepage/>} exact />
              <Route path='/search/:keyword/page/:pageNumber' element={<Homepage/>} exact/>
            </Routes>
          </Container>
        </main>
      <Footer/>
    </Router>
  )
}

export default App
