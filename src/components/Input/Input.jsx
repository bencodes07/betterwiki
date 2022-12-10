import React, {useEffect} from 'react';
import { FiSearch } from 'react-icons/fi';

function SearchInput(props) {
  return (
    <div className={`input ${props.value != undefined ? props.value : ""} ${props.size != undefined ? props.size : "default"}`}>
      <FiSearch id='icon'/>
      <input maxLength={40} value={props.value} onChange={props.handleChange} type="search" name="search" id="searchInput" placeholder={props.placeholder != undefined ? props.placeholder : "Search..."} disabled={props.disabled != undefined ? props.disabled : false} />
    </div>
  );
}

function NormalInput(props) {
  return (
    <div className={`input ${props.value != undefined ? props.value : ""} ${props.size != undefined ? props.size : "default"}`}>
      <input maxLength={40} onChange={props.handleChange} type="search" placeholder={props.placeholder != undefined ? props.placeholder : "Default"} name="search" id="searchInput" disabled={props.disabled != undefined ? props.disabled : false} />
    </div>
  );
}

function Input(props) {
  if(props.type == "search") {
    return <SearchInput handleChange={props.handleChange} value={props.value} size={props.size} placeholder={props.placeholder} disabled={props.disabled} />
  } else {
    return <NormalInput value={props.value} handleChange={props.handleChange} size={props.size} placeholder={props.placeholder} disabled={props.disabled} />
  }
  
}

export default Input