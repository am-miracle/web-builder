//jshint esversion:6
import React from 'react';
import Navbar from './Navbar';
import '../styles/global.css';

export default function Layout({ children }) {
  return (
    <div className="layout">
        <Navbar />
        <div className="">
            { children }
        </div>
        <footer>
            <p>Copyright 2021 Web Builder</p>
        </footer>
    </div>
  );
}
