import React from 'react';
import { useEffect, useState } from 'react';


export default function DateTime() {

const options: Intl.DateTimeFormatOptions = {
    weekday: 'short',
    year: 'numeric',
    month: 'short',
    day: '2-digit',
    hour: 'numeric',
    minute:'2-digit',
    second: '2-digit',
    hour12: true

}
const [currentTime, setTime] = useState(new Date().toLocaleString("en-US", options));

useEffect(() => {
const ticker = setInterval(() => {
    setTime(new Date().toLocaleString("en-US", options));
  }, 1000);

return () =>{
    clearInterval(ticker);
}
},[])
return (
    <div>It is now {currentTime}, Let's get to work!</div>
  )
}
