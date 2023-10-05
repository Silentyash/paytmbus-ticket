import React from 'react';
import janmarglogo from '../assets/janmarglogo.jpg';
import boy from '../assets/boy.jpg';
import { FcApproval } from 'react-icons/fc';
import Timer from './Timer';
import { useState } from 'react';

const Content = ({ onClick }) => {
    const[arrow, setArrow]= useState("➝");
  const currentDate = new Date();
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const day = currentDate.getDate();
  const month = months[currentDate.getMonth()];
  const year = currentDate.getFullYear();
  const hours = currentDate.getHours() % 12 || 12;
  const minutes = ("0" + currentDate.getMinutes()).slice(-2);
  const period = currentDate.getHours() >= 12 ? "PM" : "AM";

  const formattedDate = `${day} ${month} ${year}, ${hours}:${minutes} ${period}`;

  const destinationHandler=()=>{
    if (arrow === "➝"){
     setArrow("🠠")}if (arrow === "🠠") {
      setArrow("➝");
    }
  }


  return (
    <div className=" bg-cyan-100 flex flex-col items-center m-10 mt-5  rounded-lg">
      <img
        src={janmarglogo}
        alt="jabmarglogo"
        width={100}
        height={100}
        className=" m-4 rounded-full"
      ></img>
      <p className="  md:text-3xl text-xl font-bold">
        Science City...
        <button onClick={destinationHandler}>{arrow} </button> Science City
      </p>
      <p className=" text-slate-700 font-semibold mt-3"> AC</p>
      <p className=" text-slate-700 font-semibold mt-3 ">2 Adult Tickets</p>

      <div className="bg-white flex flex-row items-center rounded-full m-3 pl-2 pt-1 pr-2 gap-3">
        <img
          src={boy}
          alt="person"
          width={40}
          height={40}
          className="rounded-full"
        ></img>
        <p className="text-2xl font-bold">2</p>
      </div>
      <div className="flex  text-5xl font-bold flex-row items-center rounded-full m-3 pl-2 pt-1 pr-2 gap-3">
        <p> ₹10 </p>
        <FcApproval />
      </div>
      <p className="text-md font-bold mt-1 mb-2 leading-10 ">
        TICKET BOOKED SUCCESSFULLY
      </p>
      <p className="pb-3 font-semibold text-slate-500">{formattedDate}</p>
      <hr className=" b-slate-gray border-dotted"></hr>
      <div className="bg-white mt-6 mb-10  w-60 md:w-80 py-4 rounded-lg flex flex-col ">
        <p className="font-semibold mb-2 text-center">
          Your ticket is valid for
        </p>
        <Timer initialSeconds={10350} />
        <div className="  flex flex-col items-center mt-3">
          <button
            onClick={onClick}
            className=" bg-blue-700 md:w-72 w-40 rounded-lg py-2 text-white font-semibold  text-center"
          >
            View Your Tickets
          </button>
        </div>
      </div>
    </div>
  );
}

export default Content