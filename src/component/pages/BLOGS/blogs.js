// component/pages/BLOGS/BlogIndex.js
import React from 'react';
import { Link } from 'react-router-dom';
import './BlogIndex.css'; // Optional: Add any specific styling here

const BlogIndex = () => {
  return (
    <div className="blog-index-container">
      <h1>Our Blogs</h1>
      <ul className="blog-list">
        <li>
          <Link to="/blogs/why-yesp">Why Choose Yesp Tech?</Link>
        </li>
        <li>
          <Link to="/blogs/web-development-erode">Web Development in Erode</Link>
        </li>
        <li>
          <Link to="/blogs/erode-web-devlopment">Erode Web Development Insights</Link>
        </li>
        <li>
          <Link to="/blogs/web-development-services-erode">Web Development Services in Erode</Link>
        </li>
        <li>
          <Link to="/blogs/best-b2b-solution">Best B2B Solutions</Link>
        </li>
        <li>
          <Link to="/blogs/Top-Web-Development-Company-in-Erode">Top Web Development Company in Erode</Link>
        </li>
      </ul>
    </div>
  );
};

export default BlogIndex;
