import React from 'react'
import Body from './Body'
import Header from './Header'
import Info from './Info'
import Services from './Services'
import Info_two from './Info_two'
import Contacts from './Contacts'
import About from './About'



function Home() {
    return (
        <Body>
            <Header />
            <About/>
            <Info/>
            <Services/>
            <Info_two/>
            <Contacts/>
        </Body>
    )
}

export default Home


    // < About />
    //         <Info />
    //         <Services />
    //         <Info_two />
    //         <Contacts />