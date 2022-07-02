import Link from 'next/link';
import React, { useState } from 'react'

const ChatBoat = () => {
    const[toggle,setToggle]= useState(false);
    const clickHandler = () => {
        setToggle(!toggle)
    }
    return (
        <div style={{position:"fixed",right:"30px",bottom:"30px",zIndex:"999"}} className=" text-right">
            <div onClick={clickHandler} style={{cursor:"pointer"}}><img src='/whatsapp.png' alt='whatsapp-icon' style={{width:"50px",height:"50px"}}/></div>
            {toggle && <div className='number-list py-2' style={{background:"#fff",borderRadius:"10px"}}>
                <div className='px-3'><Link href="https://wa.me/918088887777"><a target="_blank">+91 8088887777 (Res)</a></Link></div>
                <div className='px-3'><Link href="https://wa.me/918088887777"><a target="_blank">+91 8095988877 (Front Office)</a></Link></div>
            </div>}
        </div>
    )
}

export default ChatBoat