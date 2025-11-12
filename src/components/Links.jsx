import React from 'react';

const Links = () => {
    return (
        <div className="absolute bottom-0 right-0 p-12 flex flex-col-reverse items-end">
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
