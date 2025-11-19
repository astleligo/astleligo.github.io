import React from 'react'
import About from '../components/MainPage/About'
import Links from '../components/MainPage/Links'
import Time from '../components/MainPage/Time'
import Story from '../components/AboutPage/Story'
import BrandHeader from '@/components/AboutPage/BrandHeader'



const AboutPage = () => {
    return (
        <div>
            <BrandHeader />
            <About />
            <Links position='left' />
            <Time />
            <Story />
        </div>
    )
}

export default AboutPage
