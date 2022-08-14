import React from 'react'
import { bookingLink } from '../../constants'

const BookingLink = () => {    
  return (
    <div style={{backgroundColor:"red",position:"fixed",bottom:"30px",right:"20px",padding:"10px 15px",borderRadius:"5px",zIndex:"999"}}>
        <a href={bookingLink} target="_blank" style={{color:"#fff"}} rel="noreferrer">Book Now</a>
    </div>
  )
}

export default BookingLink