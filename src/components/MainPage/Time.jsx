// Time.jsx
import gsap from "gsap";
import React, { useEffect, useState, useLayoutEffect } from "react";

const Time = () => {
    const [time, setTime] = useState("");

    // Animate whenever the time text updates
    useLayoutEffect(() => {
        if (!time) return; // prevent running on first empty render

        gsap.fromTo(
            ".time",
            { y: 0, opacity: 0 },
            { y: 20, opacity: 1, duration: 0.8, ease: "power3.out" }
        );
    }, [time]); // <-- animation re-runs when time changes

    useEffect(() => {
        const updateTime = () => {
            const now = new Date();
            const utc = now.getTime() + now.getTimezoneOffset() * 60000;
            const istTime = new Date(utc + 5.5 * 60 * 60 * 1000);

            const formatted = istTime.toLocaleTimeString("en-IN", {
                hour: "2-digit",
                minute: "2-digit",
                hour12: true,
            });

            setTime(formatted);
        };

        updateTime();
        const interval = setInterval(updateTime, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="p-0">
            <h1 className="font-[font1] text-xs sm:text-sm md:text-md uppercase time">
                {time} IST
            </h1>
        </div>
    );
};

export default Time;
