
import React from 'react'
import { FaRegFileAlt } from "react-icons/fa";
import { IoMdDownload } from "react-icons/io";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { motion } from "framer-motion"
const Card = ({data,refr}) => {
  return (
    <motion.div drag dragConstraints={refr} whileDrag={{scale:1.2}} className='  relative h-72 w-60 bg-zinc-700  rounded-2xl  text-white p-5 overflow-hidden'>
      <FaRegFileAlt />
    <p className=' leading-tight text-sm py-9'>{data.desci}</p>
    <div className='footer absolute w-full left-0 bottom-0 bg-zinc-700'>
      <div className=' flex justify-between items-center py-2  px-4'>
        <h5>{data.fileSize}</h5>
        {data.close ? <IoMdCloseCircleOutline/> : <IoMdDownload/>}
        
       
      </div>
      {data.tag.isOpen && (<div className=' h-12 w-full bg-green-600 flex items-center justify-center'>
        <h5>{data.tag.tagTitle}</h5>
      </div>)}
    </div>
    </motion.div>
  )
}

export default Card