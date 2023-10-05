import React from 'react'
import Passenger from './Passenger'
import { useState } from 'react'
import Content2 from './Content2';

const Ticket = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  const passengers = ["Passenger 1", "Passenger 2"];

  return (
    <div>
      <div className="flex flex-row gap-4 border-2 py-4 px-10">
        {passengers.map((label, index) => (
          <Passenger
            key={index}
            label={label}
            isActive={activeTab === index}
            onClick={() => handleTabClick(index)}
          />
        ))}
      </div>
      <Content2/>
      
    </div>
  );
};

export default Ticket