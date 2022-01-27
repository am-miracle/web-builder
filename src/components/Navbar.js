//jshint esversion:6
import { graphql, Link, useStaticQuery } from 'gatsby';
import React from 'react';

export default function Navbar() {

  function handleClick(){
    console.log('this page is active')
  }

  const data = useStaticQuery(graphql`
    {
      site{
        siteMetadata{
          title
        }
      }
    }
  `);
  const { title } = data.site.siteMetadata;
  return (
    <nav>
        <h1>{title}</h1>
        <div className="links">
          <Link to="/" onClick={handleClick}>Home</Link>
          <Link to="/about">About</Link>
          <Link to="/projects">Projects</Link>
        </div>
    </nav>
  );
}
