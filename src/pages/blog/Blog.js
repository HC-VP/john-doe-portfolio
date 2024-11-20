import React from 'react';
import './Blog.css';

const Blog = () => {
  return (
    <div className="blog-container">
      <h2>Blog</h2>
      <div className="articles">
        <div className="card">
          <h3>Article 1</h3>
          <p>A brief description of the article.</p>
        </div>
        <div className="card">
          <h3>Article 2</h3>
          <p>A brief description of the article.</p>
        </div>
        <div className="card">
          <h3>Article 3</h3>
          <p>A brief description of the article.</p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
