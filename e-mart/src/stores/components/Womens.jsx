import React from 'react'
import {womanData} from '../data/woman';
const Womens = () => {
    const firstFiveImages=womanData.slice(0,5)
  return (
    <>
    <div className="proTitle">
    <h2>Woman Fashion</h2>
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

export default Womens