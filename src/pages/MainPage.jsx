import React from 'react'
import NameLogo from '../components/MainPage/NameLogo'
import Designation from '../components/MainPage/Designation'
import Time from '../components/MainPage/Time'
import Links from '../components/MainPage/Links'
import About from '../components/MainPage/About'

const MainPage = () => {
    return (
        <>
            <NameLogo />
            <Designation />
            <Time />
            <Links />
            <About />
        </>
    )
}

export default MainPage
