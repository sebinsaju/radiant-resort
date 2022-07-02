import React from 'react'
import ChatBoat from '../chat-boat'
import Footer from '../footer'
import Header from '../header'

const Layout = (props) => {
    return <div>
        <Header />
        <ChatBoat />
        {props.children}
        <Footer />
    </div>
}

export default Layout