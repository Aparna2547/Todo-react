import React, { useState,useEffect } from 'react'

const CurrentDateTime = () => {
    const [currentDate,setCurrentDate] = useState(new Date())

    useEffect(() =>{
        const intervalid= setInterval (()=>{
            setCurrentDate(new Date(),1000)
        })
    },[])
    const formattedDate = currentDate.toLocaleDateString();
  return (
    <div className='text-left'>
        <h5    className='text-left'>Today</h5>
        <p className='text-left'>{formattedDate}</p>
    </div>
  )
}

export default CurrentDateTime