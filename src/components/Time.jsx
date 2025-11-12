import React, { useEffect, useState } from 'react';

const Time = () => {
    const [time, setTime] = useState('');

    useEffect(() => {
        const updateTime = () => {
            const now = new Date();
            const utc = now.getTime() + now.getTimezoneOffset() * 60000;
            const istTime = new Date(utc + 5.5 * 60 * 60 * 1000);
            const formatted = istTime.toLocaleTimeString('en-IN', {
                hour: '2-digit',
                minute: '2-digit',
                hour12: true,
            });
            setTime(formatted);
        };
        updateTime();
        const interval = setInterval(updateTime, 1000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className='absolute bottom-0 left-1/2 transform -translate-x-1/2 p-4'>
            <h1 className='font-[font1] text-xs sm:text-sm md:text-md uppercase'>
                {time} IST
            </h1>
        </div>
    );
};

export default Time;
