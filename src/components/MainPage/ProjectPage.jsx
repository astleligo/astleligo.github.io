// src/components/MainPage/ProjectPage.jsx
import React, { useState, useEffect } from "react";
import { PROJECTS } from "../../data/ProjectData";

function ProjectPage({ isOpen, onClose, projectIndex }) {
    if (!isOpen || projectIndex === null || projectIndex === undefined) return null;

    const project = PROJECTS[projectIndex];
    if (!project) return null;

    const [activeImageIndex, setActiveImageIndex] = useState(0);

    useEffect(() => {
        setActiveImageIndex(0);
    }, [projectIndex]);

    const hasImages = project.images && project.images.length > 0;
    const activeImageSrc = hasImages ? project.images[activeImageIndex] : null;

    return (
        <div
            className="fixed inset-0 z-[10000] flex items-center justify-center bg-black/60 backdrop-blur-sm"
            onClick={onClose}
        >
            <div
                className="relative h-[90vh] max-h-[95vh] w-[95vw] max-w-7xl overflow-y-auto rounded-2xl bg-[#050309] p-4 md:p-8 flex items-center justify-center"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Close button */}
                <button
                    className="absolute cursor-pointer right-4 top-4 rounded-full border border-white/20 px-3 py-1 text-xs md:text-sm uppercase tracking-[0.15em]"
                    onClick={onClose}
                >
                    Close
                </button>

                {/* Main layout: 3 sections */}
                <div className="grid gap-6 md:grid-cols-[1fr_2fr_0.5fr] md:gap-8 h-[90%]">
                    {/* 1. Details area (now includes title + meta) */}
                    <div className="space-y-4 md:space-y-5 text-sm md:text-base leading-relaxed">
                        {/* Title + meta chips */}
                        <section className="space-y-3">
                            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">
                                {project.title}
                            </h2>

                            <div className="flex flex-wrap items-center gap-3 text-xs md:text-sm text-white/60">
                                {project.time && (
                                    <span className="rounded-full border border-white/15 px-3 py-1">
                                        {project.time}
                                    </span>
                                )}

                                {project.gitLink && (
                                    <a
                                        href={project.gitLink}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="inline-flex items-center gap-1 rounded-full border border-white/25 px-3 py-1 text-[0.7rem] md:text-xs uppercase tracking-[0.2em] hover:border-white hover:bg-white hover:text-black transition"
                                    >
                                        View Code
                                        <span className="text-[0.6rem] md:text-[0.7rem]">↗</span>
                                    </a>
                                )}
                            </div>
                        </section>

                        {/* Overview */}
                        <section>
                            <h3 className="mb-1 text-xs font-semibold uppercase tracking-[0.2em] text-white/60">
                                Overview
                            </h3>
                            <p className="text-white/80">{project.description}</p>
                        </section>

                        {/* Role */}
                        {project.role && (
                            <section>
                                <h3 className="mb-1 text-xs font-semibold uppercase tracking-[0.2em] text-white/60">
                                    Role
                                </h3>
                                <p className="text-white/80">{project.role}</p>
                            </section>
                        )}

                        {/* Client */}
                        {project.cilent && (
                            <section>
                                <h3 className="mb-1 text-xs font-semibold uppercase tracking-[0.2em] text-white/60">
                                    Client
                                </h3>
                                <p className="text-white/80">{project.cilent}</p>
                            </section>
                        )}

                        {/* Tech stack */}
                        {project.techStack && project.techStack.length > 0 && (
                            <section>
                                <h3 className="mb-1 text-xs font-semibold uppercase tracking-[0.2em] text-white/60">
                                    Tech Stack
                                </h3>
                                <div className="flex flex-wrap gap-2">
                                    {project.techStack.map((tech) => (
                                        <span
                                            key={tech}
                                            className="rounded-full border border-white/15 px-3 py-1 text-xs text-white/80"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </section>
                        )}
                    </div>

                    {/* 2. Big photo area */}
                    <div className="flex flex-col items-center justify-evenly">

                        <div
                            className="relative aspect-[2.2106] h-[50vh] w-full flex items-start justify-center overflow-y-scroll rounded-xl border border-white/15 bg-white/5 no-scrollbar"
                        >
                            {activeImageSrc ? (
                                <img
                                    src={activeImageSrc}
                                    alt={`${project.title} screenshot ${activeImageIndex + 1}`}
                                    className="w-full h-auto"
                                />
                            ) : (
                                <div className="flex h-full w-full items-center justify-center text-xs md:text-sm text-white/50">
                                    Screenshots coming soon
                                </div>
                            )}
                        </div>
                    </div>



                    {/* 3. Side small gallery area */}
                    <div className="flex flex-col">
                        <h3 className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-white/60">
                            Gallery
                        </h3>

                        {hasImages ? (
                            <div className="flex md:flex-col gap-2 overflow-x-auto md:overflow-y-auto md:max-h-[70vh] pr-1 no-scrollbar">
                                {project.images.map((src, idx) => {
                                    const isActive = idx === activeImageIndex;
                                    return (
                                        <button
                                            key={idx}
                                            type="button"
                                            onClick={() => setActiveImageIndex(idx)}
                                            className={`relative flex-shrink-0 overflow-hidden rounded-lg border transition 
                                                ${isActive
                                                    ? "border-white ring-2 ring-white"
                                                    : "border-white/15 opacity-70 hover:opacity-100 hover:border-white/40"
                                                }`}
                                        >
                                            <img
                                                src={src}
                                                alt={`${project.title} thumbnail ${idx + 1}`}
                                                className="h-16 w-24 md:h-20 md:w-full object-cover"
                                            />
                                        </button>
                                    );
                                })}
                            </div>
                        ) : (
                            <div className="flex h-full items-center justify-center rounded-xl border border-dashed border-white/20 p-4 text-center text-xs md:text-sm text-white/50">
                                No images available
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProjectPage;
