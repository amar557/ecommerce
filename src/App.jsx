import { useState } from "react";

import Dashboard from "./Admin/pages/Dashboard";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LayOut from "./Admin/pages/LayOut";
import Profile from "./Admin/pages/Profile";
import Orders from "./Admin/pages/Orders";
import AllProucts from "./Admin/pages/AllProucts";
import AddProduct from "./Admin/pages/AddProduct";
import Categories from "./Admin/pages/Categories";
import Brands from "./Admin/pages/Brands";
import Customers from "./Admin/pages/Customers";
import AddCustomer from "./Admin/pages/AddCustomer";
import Login from "./Admin/pages/Login";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LayOut />}>
          <Route index element={<Dashboard />} />
          <Route path="login" element={<Login />} />
          <Route path="orders" element={<Orders />} />
          <Route path="all-products" element={<AllProucts />} />
          <Route path="add-product" element={<AddProduct />} />
          <Route path="categories" element={<Categories />} />
          <Route path="brands" element={<Brands />} />
          <Route path="customers" element={<Customers />} />
          <Route path="addcustomer" element={<AddCustomer />} />
          <Route path="profile" element={<Profile />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
