import React from 'react'
import { acData } from '../data/ac';
import Navbar from '../components/Navbar';
const AcsPage = () => {
  return (
    <>
    <Navbar/>
    <div className='pageSection'>
        {acData.map((item,index)=>(
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

export default AcsPage