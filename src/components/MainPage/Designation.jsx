import React, { useState } from 'react';

const Designation = ({ show }) => {
    const [hover, setHover] = useState(false);

    return (
        <div className='p-0'>
            <h1
                className='font-[font1] text-sm sm:text-sm md:text-md uppercase font-bold cursor-default'
                onMouseEnter={show ? () => setHover(true) : undefined}
                onMouseLeave={show ? () => setHover(false) : undefined}
            >
                {hover ? "Sorry!!! I can't hack your instagram." : "full stack developer"}
            </h1>
        </div>
    );
};

export default Designation;
