import React from 'react';
import paytmicon from '../assets/paytmicon.png';

const Header = (props) => {

    
  return (
    <div className="flex flex-row justify-between px-11 py-11 mt-6 ">
      <a href="/">
        <p className=" text-blue-400 font-bold text-md ">{props.headerItems}</p>
      </a>
      <a href="/">
        <img
          src={paytmicon}
          alt="paytmicon"
          height={80}
          width={80}
          className="mt-2 "
        ></img>
      </a>
      <div className=" text-blue-400 font-bold font-montserrat">
        <a className="text-md" href="/">
          Help
        </a>
      </div>
    </div>
  );
}

export default Header