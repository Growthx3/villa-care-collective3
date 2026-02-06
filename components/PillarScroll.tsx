'use client';

import { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import clsx from 'clsx';
import { Plus } from 'lucide-react';

// Data for the 6 Pillars
const PILLARS = [
    {
        id: 'pool',
        title: 'Pool Systems',
        image: '/images/pillar-pool.webp',
    },
    {
        id: 'mep',
        title: 'MEP Systems',
        image: '/images/pillar-mep.png',
    },
    {
        id: 'envelope',
        title: 'Building Envelope',
        image: '/images/pillar-envelope.jpg',
    },
    {
        id: 'coastal',
        title: 'Coastal Protection',
        image: '/images/pillar-coastal.jpg',
    },
    {
        id: 'emergency',
        title: 'Emergency Response',
        image: '/images/pillar-emergency.jpg',
    },
    {
        id: 'oversight',
        title: 'Oversight',
        image: '/images/pillar-oversight.jpg',
    },
];

export default function PillarScroll() {
    const containerRef = useRef<HTMLDivElement>(null);
    const [activePillarStart, setActivePillarStart] = useState<number>(0);

    // Track scroll progress within the container
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ['start start', 'end end'],
    });

    // Determine active index based on scroll position
    // 6 pillars logic: 0-1 range divided into 6 segments roughly
    // We can use a simpler approach: listening to 'change' or mapping transforms
    // But purely reacting to state change is better for rendering
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        const unsubscribe = scrollYProgress.on('change', (latest) => {
            // Divide 0-1 into 6 parts
            const step = 1 / PILLARS.length;
            // Clamp index between 0 and length-1
            const newIndex = Math.min(
                Math.floor(latest / step),
                PILLARS.length - 1
            );
            if (newIndex !== activeIndex) {
                setActiveIndex(newIndex);
            }
        });

        return () => unsubscribe();
    }, [scrollYProgress, activeIndex]);

    return (
        <section ref={containerRef} className="relative h-[600vh] w-full bg-background">
            <div className="sticky top-0 flex h-screen w-full items-center justify-center overflow-hidden px-6 md:px-12 lg:px-24">

                {/* Grid Layout */}
                <div className="grid w-full max-w-7xl grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-24">

                    {/* Left Column: Navigation (Sticky List) */}
                    <div className="flex flex-col justify-center space-y-6 lg:space-y-8">
                        {PILLARS.map((pillar, index) => (
                            <motion.div
                                key={pillar.id}
                                className="cursor-pointer"
                                onClick={() => {
                                    // Optional: Click to scroll to section
                                    // complex to implement with free scrolling height
                                }}
                            >
                                <h2
                                    className={clsx(
                                        "text-3xl font-light tracking-tight transition-all duration-500 md:text-4xl lg:text-5xl",
                                        index === activeIndex
                                            ? "text-accent opacity-100 scale-105 origin-left"
                                            : "text-main opacity-20 hover:opacity-40"
                                    )}
                                >
                                    {pillar.title}
                                </h2>
                            </motion.div>
                        ))}
                    </div>

                    {/* Right Column: Media Window */}
                    <div className="relative flex items-center justify-center">
                        <div className="aspect-video w-full overflow-hidden rounded-2xl bg-secondary/10 shadow-2xl">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={PILLARS[activeIndex].id}
                                    initial={{ opacity: 0, scale: 1.05 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: 0.6, ease: "easeInOut" }}
                                    className="relative h-full w-full"
                                >
                                    <Image
                                        src={PILLARS[activeIndex].image}
                                        alt={PILLARS[activeIndex].title}
                                        fill
                                        className="object-cover"
                                        sizes="(max-width: 768px) 100vw, 50vw"
                                        priority={true}
                                    />

                                    {/* Overlay Integration? Optional, standard gradient */}
                                    <div className="absolute inset-0 bg-black/10 transition-colors" />

                                    {/* Plus Icon Interaction - Cosmetic */}
                                    <div className="absolute bottom-6 right-6">
                                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10 backdrop-blur-md transition-transform hover:scale-110 active:scale-95">
                                            <Plus className="h-6 w-6 text-accent" />
                                        </div>
                                    </div>
                                </motion.div>
                            </AnimatePresence>
                        </div>
                    </div>

                </div>

            </div>
        </section>
    );
}
