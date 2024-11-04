import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import routing components
import Navbar from './component/navabr'; // Ensure the correct path and filename
import Home from './component/pages/Home';
import Footer from './component/footer';
import Services from './component/pages/services';
import AboutUs from './component/pages/Aboutpage';
import Contact from './component/pages/contact';
import ComingSoon from './component/pages/ComingSoon';
import Blogs from './component/pages/BLOGS/why';
import WebSolution from './component/pages/BLOGS/websolution';
import Weberode from './component/pages/BLOGS/erode';
import Serviceerode from './component/pages/BLOGS/Service';
import B2bsolution from './component/pages/BLOGS/b2b.js';
import Web from './component/pages/BLOGS/web.js';
import BlogIndex from './component/pages/BLOGS/blogs.js';
import FAQ from './component/pages/Faq.js';
import Sri from './img.js'
import Founder from './component/pages/founder.js';
import Carrers from './component/pages/carrers.js'


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/Services' element={<Services />} />
        <Route path="/blogs" element={<BlogIndex />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<ComingSoon />} />
        <Route path="/blogs/why-yesp" element={<Blogs/>} />
        <Route path="/blogs/web-development-erode" element={<WebSolution/>} />
        <Route path="/blogs/erode-web-devlopment" element={<Weberode/>} />
        <Route path="/blogs/web-development-services-erode" element={<Serviceerode/>} />
        <Route path="/blogs/best-b2b-solution" element={<B2bsolution/>} />
        <Route path='/faq' element={<FAQ />} />
        <Route path='/images/srinithinsomasundaram' element={<Sri/>} />
        <Route path='/founder' element={<Founder/>} />
        <Route path='/careers' element={<Carrers/>} />


        
        <Route path="/blogs/Top-Web-Development-Company-in-Erode" element={<Web/>} />
        



      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
