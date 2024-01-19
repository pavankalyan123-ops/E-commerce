import React from 'react'
import { computerData } from '../data/computers';
import Navbar from '../components/Navbar';
const ComputersPage = () => {
  return (
    <>
    <Navbar/>
    <div className='pageSection'>
        {computerData.map((item,index)=>(
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

export default ComputersPage