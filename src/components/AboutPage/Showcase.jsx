import React, { useState } from 'react';
import { href } from 'react-router-dom';
import Resume from '@/assets/resume/Astle-fullStack-Resume.pdf'

const Showcase = () => {
    const items = [{ label: 'Resume', href: Resume, external: true }, { label: 'GitHub', href: "https://github.com/Astle-Ligo", external: true }, { label: 'LeetCode', href: "https://leetcode.com/u/Astle-Ligo/", external: true }];

    return (
        <div className="leading-relaxed text-sm font-[font1] font-bold uppercase space-y-1">
            {items.map((item, index) => (
                <a
                    key={item.label}
                    href={item.href}
                    target={item.external ? "_blank" : undefined}
                    rel={item.external ? "noopener noreferrer" : undefined}
                    data-anim-target
                    className="flex items-center gap-1 cursor-pointer group"
                >
                    <span>{item.label}</span>
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                        ↗
                    </span>
                </a>
            ))
            }
        </div >
    );
};

export default Showcase;
