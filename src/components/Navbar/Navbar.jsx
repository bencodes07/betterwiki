import React from 'react';
import Input from '../Input/Input';
import Link from 'next/link';

function Navbar(props) {

  return (
    <header className='header'>
      <div className="headerContent">
        <div className="headingContainer">
          <Link style={{cursor: 'pointer'}} className="heading text-3xl" href="/"> betterwiki.</Link>
        </div>

        <Input handleChange={props.searchHandle} value={props.searchInput} disabled={props.disabled} type="search" />

        <nav>
          <ul>
            <Link href="/" className="navLink active">
              Home
            </Link>
            <Link href="/pages" className="navLink">
              Pages
            </Link>
            <Link href="/about" className="navLink">
              About
            </Link>
            <Link href="/help" className="navLink">
              Help
            </Link>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Navbar