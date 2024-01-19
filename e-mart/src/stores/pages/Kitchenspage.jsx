import React from 'react';
import { kitchenData } from '../data/kitchen';
import Navbar from '../components/Navbar';

const Kitchenspage = () => {
  return (
    <>
    <Navbar/>
    <div className='pageSection'>
        {kitchenData.map((item,index)=>(
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

export default Kitchenspage