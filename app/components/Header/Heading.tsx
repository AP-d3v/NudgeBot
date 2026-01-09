import DateTime from "../DateTime";
import Gretting from "../Gretting"
import Title from "../Title";

import React from 'react'

export default function Heading() {
  return (
    <>
    <div className="flex flex-col">
        <Title />
        <div className="flex flex-row">
            <Gretting />
            <DateTime />
        </div>
    
    </div>

    </>
  )
}
