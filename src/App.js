import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { loadUser } from './actions/userAction';
import './App.scss';
import About from './component/About/About';
import AddCategory from './component/Admin/Category/AddCategory';
import Dashboard from './component/Admin/Dashboard';
import NewProduct from './component/Admin/NewProduct';
import OrderList from './component/Admin/OrderList';
import ProcessOrder from './component/Admin/ProcessOrder';
import ProductList from './component/Admin/ProductList';
import Reviews from './component/Admin/Reviews/Reviews';
import UpdateProduct from './component/Admin/UpdateProduct.js';
import UpdateUser from './component/Admin/Users/UpdateUser';
import UserList from './component/Admin/Users/UserList';
import Cart from './component/cart/Cart';
import ConfirmOrder from './component/cart/ConfirmOrder';
import OrderSuccess from './component/cart/OrderSuccess';
import Payment from './component/cart/Payment';
import Shipping from './component/cart/Shipping';
import Contact from './component/Contact/Contact';
import Home from './component/Home/Home';
import Loader from './component/Layout/Loader/Loader';
import Notfound from './component/Layout/Notfound';
import MyOrders from './component/Order/MyOrders';
import OrderDetails from './component/Order/OrderDetails.js';
import ProductDetails from './component/product/ProductDetails';
import Products from './component/product/Products';
import ProtectedRoute from './component/Route/ProtectedRoute';
import Login from './component/user/Login';
import Profile from './component/user/Profile';
import Register from './component/user/Register';
import UpdatePassword from './component/user/UpdatePassword';
import UpdateProfile from './component/user/UpdateProfile';
import store from './store';
import apiInstance from './utils/apiInstance';

function App() {
    const [stripeApiKey, setStripeApiKey] = useState('');

    async function getStripeApiKey() {
        const { data } = await apiInstance.get('stripeApiKey');
        setStripeApiKey(data.stripeApiKey);
    }

    useEffect(() => {
        store.dispatch(loadUser());
        getStripeApiKey();
    }, []);

    return (
        <Routes>
            {stripeApiKey && (
                <Route
                    path="/process/payment"
                    element={
                        <Elements stripe={loadStripe(stripeApiKey)}>
                            <Payment />
                        </Elements>
                    }
                />
            )}
            <Route path="/" element={<Home />} />
            <Route path="/product/:id" element={<ProductDetails />} />
            <Route path="/products" element={<Products />} />
            <Route path="/products/:keyword" element={<Products />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/loader" element={<Loader />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/order/confirm" element={<ConfirmOrder />} />

            <Route
                path="/account"
                element={
                    <ProtectedRoute>
                        <Profile />
                    </ProtectedRoute>
                }
            />

            <Route
                path="/me/update"
                element={
                    <ProtectedRoute>
                        <UpdateProfile />
                    </ProtectedRoute>
                }
            />
            <Route
                path="/password/update"
                element={
                    <ProtectedRoute>
                        <UpdatePassword />
                    </ProtectedRoute>
                }
            />
            <Route
                path="/orders"
                element={
                    <ProtectedRoute>
                        <MyOrders />
                    </ProtectedRoute>
                }
            />
            <Route
                path="/order/:id"
                element={
                    <ProtectedRoute>
                        <OrderDetails />
                    </ProtectedRoute>
                }
            />
            <Route
                path="/order/success"
                element={
                    <ProtectedRoute>
                        <OrderSuccess />
                    </ProtectedRoute>
                }
            />
            <Route
                path="/shipping"
                element={
                    <ProtectedRoute>
                        <Shipping />
                    </ProtectedRoute>
                }
            />
            {/* Dashboard route */}
            <Route
                path="/admin/dashboard"
                element={
                    <ProtectedRoute isAdmin={true}>
                        <Dashboard />
                    </ProtectedRoute>
                }
            />
            <Route
                path="/admin/products"
                element={
                    <ProtectedRoute isAdmin={true}>
                        <ProductList />
                    </ProtectedRoute>
                }
            />
            <Route
                path="/admin/product"
                element={
                    <ProtectedRoute isAdmin={true}>
                        <NewProduct />
                    </ProtectedRoute>
                }
            />
            <Route
                path="/admin/product/:id"
                element={
                    <ProtectedRoute isAdmin={true}>
                        <UpdateProduct />
                    </ProtectedRoute>
                }
            />
            <Route
                path="/admin/orders"
                element={
                    <ProtectedRoute isAdmin={true}>
                        <OrderList />
                    </ProtectedRoute>
                }
            />
            <Route
                path="/admin/order/:id"
                element={
                    <ProtectedRoute isAdmin={true}>
                        <ProcessOrder />
                    </ProtectedRoute>
                }
            />
            <Route
                path="/admin/users"
                element={
                    <ProtectedRoute isAdmin={true}>
                        <UserList />
                    </ProtectedRoute>
                }
            />
            <Route
                path="/admin/user/:id"
                element={
                    <ProtectedRoute isAdmin={true}>
                        <UpdateUser />
                    </ProtectedRoute>
                }
            />
            <Route
                path="/admin/category"
                element={
                    <ProtectedRoute isAdmin={true}>
                        <AddCategory />
                    </ProtectedRoute>
                }
            />
            <Route
                path="/admin/reviews"
                element={
                    <ProtectedRoute isAdmin={true}>
                        <Reviews />
                    </ProtectedRoute>
                }
            />
            <Route path="*" element={<Notfound />} />
            <Route
                element={window.location.pathname === '/process/payment' ? null : <Notfound />}
            />
        </Routes>
    );
}

export default App;
