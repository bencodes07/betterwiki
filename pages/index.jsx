import React, {useState, useEffect} from 'react';
import Navbar from '../src/components/Navbar/Navbar';
import InfoItem from '../src/components/InfoItem/InfoItem';
import axios from 'axios';

function Home() {
  const [input, setInput] = useState('');
  const [finalInput, setFinalInput] = useState('');
  const [inputDisabled, setInputDisabled] = useState('');
  const [finalData, setFinalData] = useState('');
  const [finalUrls, setFinalUrls] = useState('');

  const handleChange = e => {
    setInput(e.target.value);
  }

  useEffect(() => {
    document.title = "betterwiki. | bencodes";
    const keyDownHandler = async e => {
      
      if (e.key === 'Enter') {
        e.preventDefault();
        setFinalInput(e.target.value);

        // Disable input
        setInputDisabled(true);

        try {
          const res = await axios.get("http://en.wikipedia.org/w/api.php?origin=*&format=json&action=query&exchars=200&exintro=true&explaintext=true&generator=search&gsrlimit=21&inprop=url&prop=extracts&gsrsearch=" + e.target.value);
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

  const gatherData = (pages, urls) => {
    if(!pages) return console.log('Not found!');
    const results = Object.values(pages).map(page => ({
      pageId: page.pageid,
      title: page.title,
      intro: page.extract,
    }));
    console.log(results);
    setFinalData(results);
  };

  if(finalData != '') {
    return (
      <>
        <Navbar searchHandle={handleChange} searchInput={input} disabled={inputDisabled} />
        <main>
          <h1 className="text-xl">You searched for: <strong>{finalInput}</strong></h1>
          <div className='resultContainerGrid'>
            <InfoItem title={finalData[0].title} id={finalData[0].pageId} intro={finalData[0].intro} />
            <InfoItem title={finalData[0].title} id={finalData[1].pageId} intro={finalData[1].intro} />
            <InfoItem title={finalData[2].title} id={finalData[2].pageId} intro={finalData[2].intro} />
            <InfoItem title={finalData[3].title} id={finalData[3].pageId} intro={finalData[3].intro} />
            <InfoItem title={finalData[4].title} id={finalData[4].pageId} intro={finalData[4].intro} />
            <InfoItem title={finalData[5].title} id={finalData[5].pageId} intro={finalData[5].intro} />
            <InfoItem title={finalData[6].title} id={finalData[6].pageId} intro={finalData[6].intro} />
            <InfoItem title={finalData[7].title} id={finalData[7].pageId} intro={finalData[7].intro} />
            <InfoItem title={finalData[8].title} id={finalData[8].pageId} intro={finalData[8].intro} />
            <InfoItem title={finalData[9].title} id={finalData[9].pageId} intro={finalData[9].intro} />
            <InfoItem title={finalData[10].title} id={finalData[10].pageId} intro={finalData[10].intro} />
            <InfoItem title={finalData[11].title} id={finalData[11].pageId} intro={finalData[11].intro} />
            <InfoItem title={finalData[12].title} id={finalData[12].pageId} intro={finalData[12].intro} />
            <InfoItem title={finalData[13].title} id={finalData[13].pageId} intro={finalData[13].intro} />
            <InfoItem title={finalData[14].title} id={finalData[14].pageId} intro={finalData[14].intro} />
            <InfoItem title={finalData[15].title} id={finalData[15].pageId} intro={finalData[15].intro} />
            <InfoItem title={finalData[16].title} id={finalData[16].pageId} intro={finalData[16].intro} />
            <InfoItem title={finalData[17].title} id={finalData[17].pageId} intro={finalData[17].intro} />
            <InfoItem title={finalData[18].title} id={finalData[18].pageId} intro={finalData[18].intro} />
            <InfoItem title={finalData[19].title} id={finalData[19].pageId} intro={finalData[19].intro} />
            <InfoItem title={finalData[20].title} id={finalData[20].pageId} intro={finalData[20].intro} />

          </div>
        </main>
      </>
    );
  } else {
    return (
      <>
        <Navbar searchHandle={handleChange} searchInput={input} disabled={inputDisabled} />
        <main>
          <h1 className="text-xl">Type something above to search</h1>
          <div className='resultContainerGrid'>
          </div>
        </main>
      </>
    );
  }
}

export default Home;