import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const About = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const isAboutPage = location.pathname === '/about';

    return (
        <div
            className='absolute bottom-0 left-0 p-12 cursor-pointer'
            onClick={() => navigate(isAboutPage ? '/' : '/about')}
        >
            <h1 className='font-[font1] text-xs sm:text-xs md:text-md uppercase underline decoration-2 underline-offset-4'>
                {isAboutPage ? 'close' : 'about'}
            </h1>
        </div>
    );
};

export default About;
