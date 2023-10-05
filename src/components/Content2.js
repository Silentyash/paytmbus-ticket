import React from "react";
import Timer from "./Timer";
import qr from '../assets/qr.png'
import { useState } from "react";

const Content2 = ({ onClick }) => {
    const [arrow, setArrow] = useState("➝");
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


  const destinationHandler = () => {
    if (arrow === "➝") {
      setArrow("🠠");
    }
    if (arrow === "🠠") {
      setArrow("➝");
    }
  };

  return (
    <div className=" bg-white flex flex-col items-center m-20 mt-5  rounded-lg">
      <p className="  md:text-3xl text-xl font-bold">
        Science City...
        <button onClick={destinationHandler}>{arrow} </button> Science City
      </p>
      <p className=" text-slate-700 font-semibold mt-3">
        {" "}
        Scan this QR at Entry & Exit Points
      </p>
      <img
        src={qr}
        alt="person"
        width={300}
        height={300}
        className="mt-5"
      ></img>

      <hr className=" b-slate-gray border-dotted"></hr>
      <div className="bg-white mt-6 mb-10  w-60 md:w-80 py-4 rounded-lg flex flex-col ">
        <p className="font-semibold mb-6 text-center">
          Your ticket is valid for
        </p>
        <Timer initialSeconds={10250} />
      </div>
      <div className="flex flex-row justify-between px-2 w-96 mt-20 border-t-2">
        <h1 className="font-bold text-xl text-left ">Ticket Details</h1>
        <p className="font-bold">∧</p>
      </div>
      <div className="flex flex-row justify-between px-2 w-96 mt-10  ">
        <p className="text-slate-500 font-semibold text-left ">Issued On</p>
        <p className="pb-3 font-semibold text-slate-500">{formattedDate}</p>
      </div>
    </div>
  );
};

export default Content2;
