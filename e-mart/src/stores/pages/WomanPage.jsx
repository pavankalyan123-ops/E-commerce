import React from 'react'
import { womanData } from '../data/woman';
import Navbar from '../components/Navbar';
const WomanPage = () => {
  return (
    <>
     <Navbar/>
    <div className='pageSection'>
        {womanData.map((item,index)=>(
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

export default WomanPage