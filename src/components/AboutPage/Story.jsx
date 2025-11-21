import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const Story = () => {
    const paragraphRef = useRef(null);

    useEffect(() => {
        gsap.from(paragraphRef.current, {
            opacity: 0,
            y: 30,
            duration: 1,
            ease: "power3.out",
        });
    }, []);

    return (
        <>
            <h1 className="font-bold font-[font1] uppercase text-lg">
                journey
            </h1>
            <p
                ref={paragraphRef}
                className="leading-relaxed text-base text-xs font-[font1] font-semibold uppercase"
            >
                I’ve always been drawn to solving problems and creating things. That curiosity led me into software development, where the freedom to think and the thrill of new challenges keep me focused on growing and building what’s next.
            </p>
        </>
    );
};

export default Story;
