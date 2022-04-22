import React from 'react';
import Navbar from './Components/Navbar/Navbar';
import Sidebar from './Components/Sidebar/Sidebar';
import Home from './Components/Layout/Home/Home';
import UserList from './Components/Layout/UserList/UserList';
import User from './Components/Layout/User/User';
import NewUser from './Components/Layout/NewUser/NewUser';
import ProductList from './Components/Layout/ProductList/ProductList';
import Product from './Components/Layout/Product/Product';
import NewProduct from './Components/Layout/NewProduct/NewProduct';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <div className='container'>
        <Sidebar />
        <Routes>
          <Route exact path='/' element= {<Home />} />
          <Route exact path='/Users' element= {<UserList />} />
          <Route exact path='/User/:UserId' element= {<User />} />
          <Route exact path='/NewUser' element= {<NewUser />} />
          <Route exact path='/Products' element= {<ProductList />} />
          <Route exact path='/Product/:ProductId' element= {<Product />} />
          <Route exact path='/NewProduct' element= {<NewProduct />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App;