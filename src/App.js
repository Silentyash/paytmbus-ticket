import { useState } from 'react';
import './App.css';
import Content from './components/Content';
import Header from './components/Header';
import Ticket from './components/Ticket';



function App() {

  const[isVisible, setIsVisible ]= useState(true);

 
  const handleClickTicket=()=>{
    console.log(isVisible)
    setIsVisible(false);
    console.log(isVisible);
  }

  return (
    <div className="w-full  bg-white">
      {isVisible && <Header headerItems="🡠" />}
      {isVisible && <Content onClick={handleClickTicket} />}
      {!isVisible && <Header headerItems=" 🡠   2 QR Tickets" />}
      {!isVisible && <Ticket />}
    </div>
  );
}

export default App;
