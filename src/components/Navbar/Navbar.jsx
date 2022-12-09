import React, { useState, useEffect } from 'react';
import './navbar.scss';
import Input from '../Input/Input';
import { Link } from 'react-router-dom';
import axios from 'axios';

function Navbar(mode) {

  const [endpoint, setEndpoint] = useState('');
  const [input, setInput] = useState('');
  const [inputDisabled, setInputDisabled] = useState('');

  const handleChange = e => {
    setInput(e.target.value);
    setEndpoint("http://en.wikipedia.org/w/api.php?origin=*&format=json&action=query&prop=extracts&exchars=1200&exintro=true&explaintext=true&generator=search&gsrlimit=20&gsrsearch=" + e.target.value);
    console.log(e.target.value);
  }

  useEffect(() => {
    const keyDownHandler = async e => {
      
      if (e.key === 'Enter') {
        e.preventDefault();

        // Disable input
        setInputDisabled(true);

        try {
          const res = await axios.get("http://en.wikipedia.org/w/api.php?origin=*&format=json&action=query&prop=extracts&exchars=1200&exintro=true&explaintext=true&generator=search&gsrlimit=20&gsrsearch=" + e.target.value);
          if(res.error) throw new Error(res.data.error.info);
          if(res.data.query == null) return console.log('Not found!');
          gatherData(res.data.query.pages);
          
        } catch (error) {
          console.error(error);
        } finally {
          setInput('');
          setInputDisabled(false);
        }
      }
    };

    document.addEventListener('keydown', keyDownHandler);

    return () => {
      document.removeEventListener('keydown', keyDownHandler);
    };
  }, []);

  const gatherData = pages => {
    if(!pages) return console.log('Not found!');
    const results = Object.values(pages).map(page => ({
      pageId: page.pageid,
      title: page.title,
      intro: page.extract,
    }));
    console.log(results);
    setData(results);
  };

  const setData = data => {

  };

  return (
    <header className='header'>
      <div className="headerContent">
        <div className="headingContainer">
          <h1 className="heading">betterwiki.</h1>
        </div>

        <Input handleChange={handleChange} value={input} disabled={inputDisabled} type="search" />

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