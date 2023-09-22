// import React from 'react';
// import './App.css';
// import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import Sidebar from './components/Sidebar';
// import Dashboard from './pages/Dashboard.jsx';
// import About from './pages/About.jsx';
// import Analytics from './pages/Analytics.jsx';
// import Comment from './pages/Comment.jsx';
// import Product from './pages/Product.jsx';
// import ProductList from './pages/ProductList.jsx';

// const App = () => {
//   return (
//     <BrowserRouter>
//       <Sidebar>
//         <Routes>
//           <Route path="/" element={<Dashboard />} />
//           <Route path="/dashboard" element={<Dashboard />} />
//           <Route path="/about" element={<About />} />
//           <Route path="/comment" element={<Comment />} />
//           <Route path="/analytics" element={<Analytics />} />
//           <Route path="/product" element={<Product />} />
//           <Route path="/productList" element={<ProductList />} />
//         </Routes>
//       </Sidebar>
//     </BrowserRouter>
//   );
// };

// export default App;

import { BrowserRouter, Routes,Route } from 'react-router-dom';


import Category from './pages/Category';
import Home from './pages/Home';
import Profile from './pages/Profile';
import MyOrders from './pages/MyOrder';
import Help from './pages/Help';
import WishList from './pages/WishList';
import Cart from './pages/Cart';
import Register from './pages/Register';
import Login from './pages/Login';
function App() {
  return (
    <div className="App">
       <>
      <BrowserRouter>
      
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/category" element={<Category />} />
          <Route path="/help" element={<Help/>} />
          
          <Route path="/myorders" element={<MyOrders />} />
          <Route path="/wishlist" element={<WishList/>} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          
        </Routes>
        
        </BrowserRouter>
        </>
    
    </div>
  );
}

export default App;