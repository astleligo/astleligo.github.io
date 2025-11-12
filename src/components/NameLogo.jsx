import React from 'react';
import { useNavigate } from 'react-router-dom';

const NameLogo = () => {
    const navigate = useNavigate();

    return (
        <div className='absolute top-0 left-0 p-12 cursor-pointer' onClick={() => navigate('/')}>
            <h1 className='font-[font2] text-4xl sm:text-4xl md:text-5xl lg:text-7xl tracking-[-0.05rem] leading-[0.8]'>
                ASTLE <br />LIGO
            </h1>
        </div>
    );
};

export default NameLogo;
