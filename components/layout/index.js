import React from 'react'
import BookingLink from '../booking-link'
import ChatBoat from '../chat-boat'
import Footer from '../footer'
import Header from '../header'

const Layout = (props) => {
    return <div>
        <Header />
        <ChatBoat />
        <BookingLink />
        {props.children}
        <Footer />
    </div>
}

export default Layout