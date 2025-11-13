import gsap from 'gsap';
import React, { useEffect } from 'react';

const Links = () => {
    useEffect(() => {
        gsap.fromTo(
            '.links a', // Target each <a> link inside .links
            { x: -40, opacity: 0 },
            {
                x: 0,
                opacity: 1,
                duration: 0.8,
                ease: 'power3.out',
                stagger: 0.4, // Stagger in 0.3 second intervals for each link
            }
        );
    }, []);

    return (
        <div className="absolute bottom-0 right-0 p-12 flex flex-col-reverse items-end links">
            <a
                href="https://instagram.com/astle.dev"
                target="_blank"
                rel="noopener noreferrer"
                className="font-[font1] text-xs sm:text-xs md:text-md uppercase"
            >
                Instagram
            </a>
            <a
                href="https://linkedin.com/in/astle-ligo"
                target="_blank"
                rel="noopener noreferrer"
                className="font-[font1] text-xs sm:text-xs md:text-md uppercase"
            >
                LinkedIn
            </a>
            <a
                href="https://github.com/Astle-Ligo"
                target="_blank"
                rel="noopener noreferrer"
                className="font-[font1] text-xs sm:text-xs md:text-md uppercase"
            >
                GitHub
            </a>
            <a
                href="mailto:astleligo@gmail.com"
                className="font-[font1] text-xs sm:text-xs md:text-md uppercase"
            >
                Email
            </a>
        </div>
    );
};

export default Links;
