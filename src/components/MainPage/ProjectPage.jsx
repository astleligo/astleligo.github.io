// src/components/MainPage/ProjectPage.jsx
import React from "react";
import { PROJECTS } from "../../data/ProjectData"; // ← adjust path if needed

function ProjectPage({ isOpen, onClose, projectIndex }) {
    if (!isOpen || projectIndex === null || projectIndex === undefined) return null;

    const project = PROJECTS[projectIndex];
    if (!project) return null;

    return (
        <div
            className="fixed inset-0 z-[10000] flex items-center justify-center bg-black/60 backdrop-blur-sm"
            onClick={onClose}
        >
            <div
                className="relative max-h-[90vh] w-[90vw] max-w-5xl overflow-y-auto rounded-2xl bg-[#050309] p-6 md:p-8"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Close button */}
                <button
                    className="absolute right-4 top-4 rounded-full border border-white/20 px-3 py-1 text-xs md:text-sm uppercase tracking-[0.15em]"
                    onClick={onClose}
                >
                    Close
                </button>

                {/* Title */}
                <header className="mb-6 md:mb-8">
                    <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">
                        {project.title}
                    </h2>
                    {project.subtitle && (
                        <p className="mt-2 text-sm md:text-base text-white/60">
                            {project.subtitle}
                        </p>
                    )}
                </header>

                {/* Layout: left - text, right - gallery */}
                <div className="grid gap-6 md:grid-cols-[1.1fr,1.4fr] md:gap-10">
                    {/* Text side */}
                    <div className="space-y-4 md:space-y-5 text-sm md:text-base leading-relaxed">
                        <section>
                            <h3 className="mb-1 text-xs font-semibold uppercase tracking-[0.2em] text-white/60">
                                Overview
                            </h3>
                            <p>{project.description}</p>
                        </section>

                        {project.role && (
                            <section>
                                <h3 className="mb-1 text-xs font-semibold uppercase tracking-[0.2em] text-white/60">
                                    Role
                                </h3>
                                <p>{project.role}</p>
                            </section>
                        )}

                        {project.techStack && project.techStack.length > 0 && (
                            <section>
                                <h3 className="mb-1 text-xs font-semibold uppercase tracking-[0.2em] text-white/60">
                                    Tech Stack
                                </h3>
                                <div className="flex flex-wrap gap-2">
                                    {project.techStack.map((tech) => (
                                        <span
                                            key={tech}
                                            className="rounded-full border border-white/15 px-3 py-1 text-xs"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </section>
                        )}
                    </div>

                    {/* Gallery side */}
                    <div className="space-y-3 md:space-y-4">
                        {project.images && project.images.length > 0 ? (
                            project.images.map((src, idx) => (
                                <div
                                    key={idx}
                                    className="overflow-hidden rounded-xl border border-white/10"
                                >
                                    <img
                                        src={src}
                                        alt={`${project.title} screenshot ${idx + 1}`}
                                        className="h-full w-full object-cover transition-transform duration-500 hover:scale-[1.02]"
                                    />
                                </div>
                            ))
                        ) : (
                            <div className="flex h-full items-center justify-center rounded-xl border border-dashed border-white/20 p-6 text-center text-xs md:text-sm text-white/50">
                                Screenshots coming soon
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProjectPage;
