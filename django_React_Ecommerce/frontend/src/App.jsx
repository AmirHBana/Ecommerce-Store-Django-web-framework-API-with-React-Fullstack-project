import {useEffect, useState} from 'react'
import { Routes, Route, BrowserRouter } from "react-router-dom"

import Login from './views/auth/Login.jsx'
import Register from './views/auth/Register.jsx'
import Logout from "./views/auth/logout.jsx";
import ForgetPassword from "./views/auth/ForgetPassword.jsx";
import CreatePassword from "./views/auth/CreatePassword.jsx";
import StoreHeader from "./views/base/StoreHeader.jsx";
import StoreFooter from "./views/base/StoreFooter.jsx";
import MainWrapper from "./layout/MainWrapper.jsx";
import Products from "./views/store/Products.jsx";
import ProductDetail from "./views/store/ProductDetail.jsx";
import Cart from "./views/store/Cart.jsx";
import Checkout from "./views/store/Checkout.jsx";
import Search from "./views/store/Search.jsx";
import {CartContext} from "./views/plugin/Context.jsx";
import CartID from "./views/plugin/CartID.jsx";
import UserData from "./views/plugin/UserData.jsx";
import apiInstance from "./utils/axios.js";
import Account from "./views/customer/Account.jsx";
import PrivateRoute from "./layout/PrivateRoute.jsx";
import Orders from "./views/customer/Orders.jsx";
import OrderDetail from "./views/customer/OrderDetail.jsx";
import Wishlist from "./views/customer/Wishlist.jsx";
import CustomerNotification from "./views/customer/CustomerNotification.jsx";
import CustomerSettings from "./views/customer/Settings.jsx";
import Invoice from "./views/customer/Invoice.jsx";
import Dashboard from "./views/vendor/Dashboard.jsx";
import Product from "./views/vendor/Products.jsx";
import VendorOrder from "./views/vendor/VendorOrder.jsx";
import VendorOrderDetail from "./views/vendor/VendorOrderDetail.jsx";
import Earning from "./views/vendor/Earning.jsx";
import Reviews from "./views/vendor/Reviews.jsx";
import ReviewDetail from "./views/vendor/ReviewDetail.jsx";
import Coupon from "./views/vendor/Coupon.jsx";
import EditCoupon from "./views/vendor/EditCoupon.jsx";
import Notification from "./views/vendor/Notification.jsx";
import Settings from "./views/vendor/Settings.jsx";
import Shop from "./views/vendor/Shop.jsx";
import AddProduct from "./views/vendor/AddProduct.jsx";
import UpdateProduct from "./views/vendor/UpdateProduct.jsx";


function App() {
    const [count, setCount] = useState(0)
    const [cartCount, setCartCount] = useState()

    const userData = UserData()
    const cart_id = CartID()

    useEffect(() => {
        const url = userData ? `cart-list/${cart_id}/${userData?.user_id}/` : `cart-list/${cart_id}/`
        apiInstance.get(url).then((res) => {
            setCartCount(res.data.length)
        })
    }, []);

   return (
      <CartContext.Provider value={[cartCount, setCartCount]}>
          <BrowserRouter>
            <StoreHeader />
                <MainWrapper>
                    <Routes>
                        {/*Authentication Components*/}
                       <Route path='/login' element={<Login />} />
                       <Route path='/register' element={<Register />} />
                       <Route path='/logout' element={<Logout />} />
                       <Route path='/forgot-password' element={<ForgetPassword />} />
                       <Route path='/create-new-password' element={<CreatePassword />} />

                        {/*Store Components*/}
                        <Route path='/' element={<Products />} />
                        <Route path='/detail/:slug/' element={<ProductDetail />} />
                        <Route path='/cart/' element={<Cart />} />
                        <Route path='/checkout/:order_oid/' element={<Checkout />} />
                        <Route path='/search' element={<Search />} />

                        {/*Customer Endpoint or components*/}
                        <Route path='/customer/account/' element={<PrivateRoute><Account /></PrivateRoute>} />
                        <Route path='/customer/orders/' element={<PrivateRoute><Orders /></PrivateRoute>} />
                        <Route path='/customer/orders/:order_oid/' element={<PrivateRoute><OrderDetail /></PrivateRoute>} />
                        <Route path='/customer/wishlist/' element={<PrivateRoute><Wishlist /></PrivateRoute>} />
                        <Route path='/customer/notifications/' element={<PrivateRoute><CustomerNotification /></PrivateRoute>} />
                        <Route path='/customer/settings/' element={<PrivateRoute><CustomerSettings /></PrivateRoute>} />
                        <Route path='/customer/invoice/:order_oid/' element={<PrivateRoute><Invoice /></PrivateRoute>} />

                        {/*Vendor Endpoints or components*/}
                        <Route path='/vendor/dashboard/' element={<PrivateRoute><Dashboard /></PrivateRoute>} />
                        <Route path='/vendor/products/' element={<PrivateRoute><Product /></PrivateRoute>} />
                        <Route path='/vendor/orders/' element={<PrivateRoute><VendorOrder /></PrivateRoute>} />
                        <Route path='/vendor/orders/:order_oid/' element={<PrivateRoute><VendorOrderDetail /></PrivateRoute>} />
                        <Route path='/vendor/earning/' element={<PrivateRoute><Earning /></PrivateRoute>} />
                        <Route path='/vendor/reviews/' element={<PrivateRoute><Reviews /></PrivateRoute>} />
                        <Route path='/vendor/reviews/:review_id/' element={<PrivateRoute><ReviewDetail /></PrivateRoute>} />
                        <Route path='/vendor/coupon/' element={<PrivateRoute><Coupon /></PrivateRoute>} />
                        <Route path='/vendor/coupon/:coupon_id/' element={<PrivateRoute><EditCoupon /></PrivateRoute>} />
                        <Route path='/vendor/notifications/' element={<PrivateRoute><Notification /></PrivateRoute>} />
                        <Route path='/vendor/settings/' element={<PrivateRoute><Settings /></PrivateRoute>} />
                        <Route path='/vendor/:slug/' element={<PrivateRoute><Shop /></PrivateRoute>} />
                        <Route path='/vendor/product/new/' element={<PrivateRoute><AddProduct /></PrivateRoute>} />
                        <Route path='/vendor/product/update/:pid/' element={<PrivateRoute><UpdateProduct /></PrivateRoute>} />
                    </Routes>
                </MainWrapper>
            <StoreFooter />
          </BrowserRouter>
      </CartContext.Provider>
   )
}

export default App
