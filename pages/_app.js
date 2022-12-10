import React from 'react';
import '../src/assets/App.scss';
import '../src/components/Navbar/navbar.scss';
import '../src/components/Input/input.scss';
import '../src/components/InfoItem/InfoItem.scss';
import './css/index.scss';

function App({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default App;