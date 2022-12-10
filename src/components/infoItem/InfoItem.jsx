import React from 'react';
import { useEffect } from 'react';
import { BiLinkExternal } from 'react-icons/bi';
 
function InfoItem(props) {

  const handleClick = e => {
    window.location.href = props.href;
  }
  return (
    <div className='infoItemContainer'>
      <div className="infoItemHeading">
        <h2>{props.title}</h2>
        <p className='infoItemId'>ID: <code>{props.id}</code></p>
        <BiLinkExternal className='infoItemLink' onClick={handleClick} />
      </div>

      <p className='infoItemContent'>{props.intro}</p>
      
    </div>
  );
}

export default InfoItem