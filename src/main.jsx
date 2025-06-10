import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Navbar.jsx';
import Footer from './Footer.jsx';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Contacts from './pages/Contacts.jsx';
import About from './pages/About.jsx';
import Travel from './pages/Travel.jsx';
import Stay from './pages/Stay.jsx';
import Blog from './pages/Blog.jsx';
import Booking from './pages/Booking.jsx';
import Destination from './pages/Destination.jsx';
import { Package } from 'lucide-react';



createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  
  <Navbar/>
  
    <App />
  <Routes>
    <Route path="/" element={<Home />} />
               <Route path="/about" element={<About/>} />
                <Route path="/packages" element={<Travel />} />
                <Route path="/stay" element={<Stay />} />
                <Route path="/destination" element={<Destination />} />

                <Route path="/blog" element={<Blog />} />
                <Route path="/contacts" element={<Contacts />} />
                 <Route path="/booking" element={<Booking/>} />

  </Routes>
  <Footer/>
  
  </BrowserRouter>
  ,
)
