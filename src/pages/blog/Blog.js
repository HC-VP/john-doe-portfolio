import React from 'react';
import { Helmet } from "react-helmet";
import './Blog.css';

const Blog = () => {
  return (
    <div className="blog-container">

      <Helmet>
        <title>Blog - John Doe Portfolio</title>
        <meta
          name="description"
          content="Explore John Doe's blog, covering web development topics, tutorials, and tech trends."
        />
        <meta
          name="keywords"
          content="web development, JavaScript, React, coding, tutorials, blog"
        />
        <meta property="og:title" content="Blog - John Doe Portfolio" />
        <meta
          property="og:description" content="Learn from John Doe's blog, covering web development, JavaScript, React tutorials, and more."
        />
        <meta property="og:image" content="/images/blog/coder.jpg" />
        <meta property="og:url" content="https://john-doe-portfolio.com/blog" />
      </Helmet>

      
      <div className="blog-image">
        <img src="/images/banner.jpg" alt="Blog Banner" />
      </div>



      
      <h2>Blog</h2>
      <p className="blog-intro">Retrouvez ici quelques articles sur le développement web.</p>
      
      
      
      <div className="articles">
        <div className="card">
          <img src="/images/blog/coder.jpg" alt="Article 1" className="card-img" />
          <div className="card-body">
            <h3>Coder son site en HTML/CSS</h3>
            <p>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" className="btn btn-primary">Lire la suite</a>
            <div className="published-date">Publié le 22 août 2022</div>
          </div>
        </div>

        <div className="card">
          <img src="/images/blog/croissance.jpg" alt="Article 2" className="card-img" />
          <div className="card-body">
            <h3>Vendre ses produits sur le web</h3>
            <p>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" className="btn btn-primary">Lire la suite</a>
            <div className="published-date">Publié le 20 août 2022</div>
          </div>
        </div>

        <div className="card">
          <img src="/images/blog/google.jpg" alt="Article 3" className="card-img" />
          <div className="card-body">
            <h3>Se positionner sur Google</h3>
            <p>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" className="btn btn-primary">Lire la suite</a>
            <div className="published-date">Publié le 1 août 2022</div>
          </div>
        </div>

        <div className="card">
          <img src="/images/blog/screens.jpg" alt="Article 4" className="card-img" />
          <div className="card-body">
            <h3>Coder en responsive design</h3>
            <p>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" className="btn btn-primary">Lire la suite</a>
            <div className="published-date">Publié le 31 juillet 2022</div>
          </div>
        </div>

        <div className="card">
          <img src="/images/blog/seo.jpg" alt="Article 5" className="card-img" />
          <div className="card-body">
            <h3>Techniques de référencement</h3>
            <p>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" className="btn btn-primary">Lire la suite</a>
            <div className="published-date">Publié le 30 juillet 2022</div>
          </div>
        </div>

        <div className="card">
          <img src="/images/blog/technos.png" alt="Article 6" className="card-img" />
          <div className="card-body">
            <h3>Apprendre à coder</h3>
            <p>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" className="btn btn-primary">Lire la suite</a>
            <div className="published-date">Publié le 12 juillet 2022</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
