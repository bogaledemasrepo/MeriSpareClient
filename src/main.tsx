import { StrictMode } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { createRoot } from 'react-dom/client'
import './style.css'
import Home from './pages/Home'
import Order from './pages/Order'
import Profile from './pages/Profile'
import Checkout from './pages/Checkout'
import ProductDetail from './pages/ProductDetail'
import Oils from './pages/Oils'
import Packages from './pages/Packages'
import SpareList from './pages/SpareList'
import SpareCategory from './pages/SpareCategory'
import Batteries from './pages/Batteries'
import Tires from './pages/Tires'
import Requests from './pages/Requests'
import UserCars from './pages/UserCars'
import Login from './pages/Login'
import Register from './pages/Register'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
          <Routes>
            <Route path='/' Component={Home} />
            <Route path='/login' Component={Login} />
            <Route path='/register' Component={Register} />
            <Route path='/orders' Component={Order} />
            <Route path='/profile' Component={Profile} />
            <Route path='/checkout' Component={Checkout} />
            <Route path='/detail' Component={ProductDetail} />
            <Route path='/oils' Component={Oils} />
            <Route path='/packages' Component={Packages} />
            <Route path='/spare-list' Component={SpareList} />
            <Route path='/spare-category' Component={SpareCategory} />
            <Route path='/batteries' Component={Batteries} />
            <Route path='/tires' Component={Tires} />
            <Route path='/requests' Component={Requests} />
            <Route path='/user-cars' Component={UserCars} />
        </Routes>
    </BrowserRouter>
  </StrictMode>,
)