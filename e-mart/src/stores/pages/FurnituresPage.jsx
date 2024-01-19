import React from 'react';
import { furnitureData } from '../data/furniture';
import Navbar from '../components/Navbar';

const FurnituresPage = () => {
  return (
    <>
   <Navbar/>
    <div className='pageSection'>
        {furnitureData.map((item,index)=>(
            <div key={index}>
               <div className="pageImg">
                <img src={item.image} alt="" />
               </div>
               <div className="proModal">
                {item.company},{item.model}
               </div>
            </div>
        ))}
    </div>
    </>
  )
}

export default FurnituresPage