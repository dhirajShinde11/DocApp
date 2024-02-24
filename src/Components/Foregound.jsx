import React, { useRef, useState } from 'react'
import Card from './Card'

const Foregound = () => {
  const ref = useRef(null)
  const data =[{
    desci :"i am new here",
    fileSize :".7mb",
    close : false,
    tag : {isOpen:false,tagTitle:"Download now"}

  },
  {
    desci :"hell my friend",
    fileSize :".7mb",
    close : true,
    tag : {isOpen:true,tagTitle:"Upload"}

  },
  {
    desci :"i am here",
    fileSize :".5mb",
    close : false,
    tag : {isOpen:true,tagTitle:"Download now"}

  }]
  return (
    
      <div ref={ref} className='fixed  w-full h-full p-10 z[3] flex gap-10 '> 
      {data.map((item,index)=>(
        <Card data={item} refr ={ref}/>
      ))}
        </div>
 
    )
}

export default Foregound