import "./App.css";
import Header from "./components/header";
import ShippingPolicy from "./components/shippingPolicy";
import TermsConditions from "./components/terms&Conditions";
import RefundsReplacement from "./components/refunds&Replacement";
import PrivacyPolicy from "./components/privacyPolicy";
import { CssBaseline } from "@mui/material";
import CookieConsent from "./components/cookies";
import FeedBack from "../src/components/feedback";
import Footer from "./components/foot/foot";
import { Route, Routes } from "react-router-dom";
import AboutUs from "./components/about/about";
import ContactPage from "./components/contact/ContactPage";
import Home from "./components/home/home";
import ProductList from "./components/cart";
import Payment from "./components/payment";
import { useState } from "react";
import ProductCart from "./components/productCart";
import Favorite from "./components/favorite";
import Login from "../src/components/login/login";
import Forgot from "./components/login/forgot";
import Signup from "./components/login/signup";
import NewPassword from "./components/login/newPassword";
import Address from "./components/address/address";
import Otp from "./components/login/otp";
import ImageSlider from "./components/imageSlider";
import OrderSuccess  from "./components/orderconfirmation/orderconfirm";
import Success from "./components/success";

const products = [
  {
    id: 1,
    name: "Product 1",
    image: "path_to_image_1.jpg", // Update with actual image paths
    price: 100,
  },
  {
    id: 2,
    name: "Product 2",
    image: "path_to_image_2.jpg",
    price: 200,
  },
  // Add more products as needed
];

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [likedProducts, setLikedProducts] = useState([]);

  const handleAddToCart = (product) => {
    setCartItems((prevItems) => {
      if (!prevItems.find((item) => item.id === product.id)) {
        return [...prevItems, product];
      }
      return prevItems;
    });
  };
  const handleRemoveItem = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };
  const handleProductLiked = (product) => {
    setLikedProducts((prevLiked) => {
      if (prevLiked.includes(product.id)) {
        return prevLiked.filter((id) => id !== product.id);
      }
      return [...prevLiked, product.id];
    });
  };
  const handleLikeToggle = (product) => {
    setLikedProducts((prevLikedProducts) => {
      const isLiked = prevLikedProducts.find((p) => p.id === product.id);
      if (isLiked) {
        return prevLikedProducts.filter((p) => p.id !== product.id);
      } else {
        return [...prevLikedProducts, product];
      }
    });
  };
  return (
    <div className="App">
      <Header
        cartItemCount={cartItems.length}
        cartItems={cartItems}
        likedProducts={likedProducts}
      />
      <Routes>
        <Route path="/shipping" element={<ShippingPolicy />} />
        <Route path="/termsConditions" element={<TermsConditions />} />
        <Route path="/refundsReplacement" element={<RefundsReplacement />} />
        <Route path="/privacyPolicy" element={<PrivacyPolicy />} />
        <Route path="/feedback" element={<FeedBack />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/address" element={<Address />} />
        <Route path="/otp" element={<Otp />} />
       <Route path="/orderConfirm" element={<OrderSuccess />} />
        <Route
          path="/product"
          element={
            <ProductCart
              cartItems={cartItems}
              handleRemoveItem={handleRemoveItem}
            />
          }
        />.
        <Route
          path="/favorite"
          element={<Favorite  likedProducts={likedProducts} 
          onAddToCart={handleAddToCart} 
          onLikeToggle={handleLikeToggle}  />}
        />
        <Route
          path="/"
          element={
            <Home
              onAddToCart={handleAddToCart}
              onProductLiked={handleProductLiked}
              products={products} // Assume `products` is defined elsewhere in your code
              likedProducts={likedProducts.map((p) => p.id)}
              onLikeToggle={handleLikeToggle}
            />
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/forgot" element={<Forgot />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/newpassword" element={<NewPassword />} />
      </Routes>
      <CookieConsent /> 
      <Footer />
    </div>
  );
}

export default App;
