import React from 'react';
import './Blog.css';

const Blog = () => {
  return (
    <div className="blog-container">
      <h2>Blog</h2>
      <div className="articles">
        <div className="card">
          <h3>Coder son site en HTML/CSS</h3>
          <p>A brief description of the article.</p>
        </div>
        <div className="card">
          <h3>Vendre ses produits sur le web</h3>
          <p>A brief description of the article.</p>
        </div>
        <div className="card">
          <h3>Se positionner sur Google</h3>
          <p>A brief description of the article.</p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
