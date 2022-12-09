import React, {useState, useEffect} from 'react';
import Navbar from '../components/Navbar/Navbar';
import InfoItem from '../components/infoItem/infoItem';
import "./Home.scss";
import axios from 'axios';

function Home() {
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
    <>
      <Navbar searchHandle={handleChange} searchInput={input} disabled={inputDisabled} />
      <main>
        <InfoItem title="Hello" />
      </main>
    </>
  );
}

export default Home;