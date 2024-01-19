import React from 'react'
import { watchData } from '../data/watch';
import Navbar from '../components/Navbar';
const WatchesPage = () => {
  return (
    <>
    <Navbar/>
    <div className='pageSection'>
        {watchData.map((item,index)=>(
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

export default WatchesPage