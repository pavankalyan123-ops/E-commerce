import React from 'react'
import { furnitureData } from '../data/furniture'
const Furnitures = () => {
    const firstFiveImages=furnitureData.slice(0,5)
  return (
    <>
    <div className="proTitle">
    <h2>Furnitures</h2>
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

export default Furnitures