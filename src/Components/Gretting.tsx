import React from 'react';
import { useEffect, useState } from 'react';

export default function Gretting() {
   const greetings = {
    morning: "Good Morning",
    afternoon: "Good Afternoon",
    evening: "Good Evening",
    night: "Good Night"
    }
    

    const whatPartOfDay = function() {
        let currentHour = new Date().getHours()
        debugger;
        switch (true) {
  case (5 <= currentHour && currentHour <= 11):
    return greetings.morning;
  case (12 <= currentHour && currentHour <= 16):
    return greetings.afternoon;
  case (17 <= currentHour && currentHour <= 20):
    return greetings.evening;
  case (21 <= currentHour || currentHour <= 4):
    return greetings.night;

  default:
    return "Good Day";
}
    }

    const [dayPeriod, setdayPeriod] = useState(whatPartOfDay())

    useEffect(()=>{
     const periodInterval =  setInterval(() => {
    setdayPeriod(whatPartOfDay());
  }, 60000);

    return () => clearInterval(periodInterval);

    },[])
  return (
    <div>{dayPeriod}</div>
  )
}
