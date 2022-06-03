// import logo from './logo.svg';
import "./App.css";
// import {BrowserRouter as Router} from 'react-router-dom'
import { Route, Switch, Routes } from "react-router-dom";
import Header from "./containers/Header";
import ProductList from "./containers/ProductList";
import ProductDetails from "./containers/ProductDetails";

import HomeBottom from "./containers/HomeBottom";
import Cartpage from "./containers/Cartpage";
import Address from "./containers/Address";
import Payment from "./containers/Payment";
import SignUp from "./containers/SignUp";
import Try from "./containers/Try";
import  {LoginPage}  from "./containers/LoginPage";
import UserLogin from "./containers/UserLogin";
import SuccessPage from "./containers/SuccessPage";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<HomeBottom />} />

        <Route exact path="/product" element={<ProductList />} />
        <Route exact path="/product/cart" element={<Cartpage />} />
        <Route exact path="/product/checkout" element={<Address/>}></Route>
        <Route exact path="/product/payment" element={<Payment />} />
        <Route exact path="/signup" element={<SignUp />} />
        <Route exact path="/login" element={<LoginPage />} />
        {/* <Route exact path="/userlogin" element={<UserLogin />} /> */}
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/success" element={<SuccessPage />} />

   <Route exact path="/try" element={<Try />} />

        <Route>404 not found!!!</Route>
      </Routes>
    </div>
  );
}

export default App;
