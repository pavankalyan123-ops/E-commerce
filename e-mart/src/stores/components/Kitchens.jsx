import React from 'react'
import { kitchenData } from '../data/kitchen'
const Kitchens = () => {
    const firstFiveImages=kitchenData.slice(0,5)
  return (
    <>
    <div className="proTitle">
    <h2>Kitchens</h2>
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

export default Kitchens