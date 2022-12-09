import React, { useState, useEffect } from 'react';
import './navbar.scss';
import Input from '../Input/Input';
import { Link } from 'react-router-dom';
import axios from 'axios';

function Navbar(props) {

  return (
    <header className='header'>
      <div className="headerContent">
        <div className="headingContainer">
          <h1 className="heading">betterwiki.</h1>
        </div>

        <Input handleChange={props.searchHandle} value={props.searchInput} disabled={props.disabled} type="search" />

        <nav>
          <ul>
            <Link to="/" className="navLink active">
              Home
            </Link>
            <Link to="/content" className="navLink">
              Pages
            </Link>
            <Link to="/about" className="navLink">
              About
            </Link>
            <Link to="/help" className="navLink">
              Help
            </Link>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Navbar