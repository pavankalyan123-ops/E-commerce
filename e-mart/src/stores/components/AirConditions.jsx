import React from 'react'
import { acData } from '../data/ac'
const AirConditions = () => {
    const firstFiveImages=acData.slice(0,5)
  return (
    <>
    <div className="proTitle">
    <h2>Air Condition</h2>
    </div>
    <div className='proSection'>
      {
        firstFiveImages.map((item,index)=>(
            <div className='imgBox' key={index}>
                <img className='proImage' src={item.image} />
            </div>
        ))
      }
    </div>
    </>
  )
}

export default AirConditions