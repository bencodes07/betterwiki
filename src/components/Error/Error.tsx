import React, { useEffect, useState } from 'react'
import {BiErrorCircle} from 'react-icons/bi';
import './error.scss'

function Error(props) {
  const [errorLabel, setLabel] = useState("");
  useEffect(() => {
    if(props.label == undefined) setLabel("Error: ");
    else setLabel(props.label);
  }, []);
  
  return (
    <p>
      <BiErrorCircle className='icon'/>
      <strong>{errorLabel}</strong> 
      {props.message}
    </p>
  )
}

export default Error