import React, { useState } from 'react'
import { mobileData } from '../data/mobiles'
import Navbar from '../components/Navbar';
import { Link } from 'react-router-dom';
const MobilePage = () => {
  const[selectedProduct,setSelectedProduct]=useState([]);
  const handleChange=(company)=>{
    if(selectedProduct.includes(company))
    {
      setSelectedProduct(selectedProduct.filter(item=>item!==company));
    }else{
      setSelectedProduct([...selectedProduct,company])
    }
  }
  const filteredProduct=selectedProduct.length===0?
  mobileData:mobileData.filter(item=>selectedProduct.includes(item.company))
  return (
    <>
    <Navbar/>
    <div className="full-page">
    <div className="pro-selected">
      {mobileData.map((item,index)=>(
        <div className='pro-input' key={index}>
          <label>
            <input type="checkbox" 
            onChange={()=>handleChange(item.company)}
            checked={selectedProduct.includes(item.company)}/>
            {item.company}
          </label>
        </div>
      ))}
    </div>
    <div className='pageSection'>
        {filteredProduct.map((item,index)=>(
            <div key={index}>
               <div className="pageImg">
                <Link to={`/mobiles/${item.id}`}>
                <img src={item.image} alt="" />
                </Link>
               </div>
               <div className="proModal">
                {item.company},{item.model}
               </div>
            </div>
        ))}
    </div>
    </div>
    </>
  )
}

export default MobilePage