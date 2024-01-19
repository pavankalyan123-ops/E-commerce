import React from 'react'
import { menData } from '../data/men';
import Navbar from '../components/Navbar';
const MensPage = () => {
  return (
    <>
     <Navbar/>
    <div className='pageSection'>
        {menData.map((item,index)=>(
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

export default MensPage