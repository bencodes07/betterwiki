import React from 'react';
import '../src/App.scss';
import '../src/components/Navbar/navbar.scss';
import '../src/components/Input/input.scss';

function App({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default App;