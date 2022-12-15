import React from 'react';
import { useEffect } from 'react';
import { BiLinkExternal } from 'react-icons/bi';
 
function InfoItem(props) {

  const handleClick = e => {
    window.open('https://en.wikipedia.org/w/index.php?curid=' + props.id, '_blanc');
  }
  return (
    <div className='infoItemContainer'>
      <div className="infoItemHeading">
        <h2 className='text-2xl font-semibold'>{props.title}</h2>
        <p className='infoItemId'>ID: <code className='font-xs'>{props.id}</code></p>
        <BiLinkExternal className='infoItemLink text-3xl' onClick={handleClick} />
      </div>

      <p className='infoItemContent'>{props.intro}</p>
      
    </div>
  );
}

export default InfoItem