'use client';

import { useRef, useState, useEffect } from 'react';
import { motion, useScroll, AnimatePresence } from 'framer-motion';
import clsx from 'clsx';

// Data for the 6 Pillars
const PILLARS = [
    {
        id: 'pool',
        title: 'Pool Systems',
        points: [
            'Water chemistry testing & balancing',
            'Filtration/circulation servicing (filters, pumps, valves, flow/pressure)',
            'Equipment servicing (heaters/heat pumps, chlorination/dosing systems, controls)',
            'Leak investigation and performance troubleshooting',
            'Seasonal opening and winterisation',
        ],
    },
    {
        id: 'mep',
        title: 'MEP Systems',
        displayTitle: 'Mechanical, Electrical & Plumbing',
        points: [
            'HVAC servicing and performance tuning (filters, drains, airflow, calibration)',
            'Plumbing inspections and leak prevention (wet areas, valves, pressure)',
            'Hot water system maintenance (boilers/heat pumps/cylinders, descaling as needed)',
            'Electrical fault triage + coordination of certified compliance work',
        ],
    },
    {
        id: 'envelope',
        title: 'Building Envelope',
        displayTitle: 'Exterior Technical Care',
        points: [
            'Roof/terrace water-ingress inspections and prevention',
            'Gutter, drain, stormwater flow checks and clearing',
            'Door/window hardware, seals, and corrosion-sensitive components upkeep',
            'Facade/stone condition monitoring and specialist coordination',
        ],
    },
    {
        id: 'coastal',
        title: 'Coastal Protection',
        points: [
            'Salt-air corrosion control and marine-grade recommendations',
            'Humidity monitoring and mould-prevention actions (ventilation/dehumidifier strategy)',
        ],
    },
    {
        id: 'emergency',
        title: 'Emergency Response',
        displayTitle: 'Safety, Readiness & Emergency Response',
        points: [
            'Fire safety device checks (and certified provider coordination where required)',
            'Water shutoff/isolation testing and emergency stabilisation',
            'Rapid response call-outs with documented actions',
        ],
    },
    {
        id: 'oversight',
        title: 'Oversight',
        displayTitle: 'Stewardship & Oversight',
        points: [
            'Planned preventive maintenance programme (weekly/monthly/seasonal)',
            'Structured technical inspections with photo logs and measured notes',
            'Issue triage (urgent / soon / monitor) with budget guidance',
            'Vendor management, supervision, snagging, and quality control',
            'Asset register + maintenance logbook + monthly/quarterly reporting',
        ],
    },
];

export default function PillarScroll() {
    const containerRef = useRef<HTMLDivElement>(null);

    // Track scroll progress within the container
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ['start start', 'end end'],
    });

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
        <section ref={containerRef} className="relative h-[600vh] w-full bg-background font-sans">
            <div className="sticky top-0 flex h-screen w-full items-center justify-center overflow-hidden px-4 md:px-8 lg:px-16 py-12">

                {/* Grid Layout - Two Cards */}
                <div className="grid w-full max-w-7xl grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-8 h-[80vh]">

                    {/* Left Column: Navigation Card - Dark Beige */}
                    <div className="flex flex-col justify-center rounded-3xl bg-[#BFC0BC] p-8 lg:p-12 shadow-xl">
                        <div className="space-y-6 lg:space-y-8">
                            {PILLARS.map((pillar, index) => (
                                <motion.div
                                    key={pillar.id}
                                    className="cursor-pointer"
                                >
                                    <h2
                                        className={clsx(
                                            "text-3xl font-light tracking-tight transition-all duration-500 md:text-4xl lg:text-5xl",
                                            index === activeIndex
                                                ? "text-[#202020] opacity-100 scale-105 origin-left"
                                                : "text-[#808076] opacity-60 hover:opacity-80"
                                        )}
                                    >
                                        {pillar.title}
                                    </h2>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Right Column: Content Card - Lighter Beige */}
                    <div className="relative flex items-center justify-start rounded-3xl bg-[#DCD8D3] p-8 lg:p-16 shadow-xl">
                        <div className="w-full">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={PILLARS[activeIndex].id}
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -20 }}
                                    transition={{ duration: 0.5, ease: "easeOut" }}
                                    className="relative"
                                >
                                    <h3 className="mb-8 text-2xl font-medium text-[#000000] md:text-3xl">
                                        {PILLARS[activeIndex].displayTitle || PILLARS[activeIndex].title}
                                    </h3>

                                    <ul className="space-y-4">
                                        {PILLARS[activeIndex].points.map((point, i) => (
                                            <motion.li
                                                key={i}
                                                initial={{ opacity: 0, y: 10 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{ delay: i * 0.1 }}
                                                className="flex items-start gap-4 text-base font-medium leading-relaxed text-[#000000] md:text-lg"
                                            >
                                                <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-black/40" />
                                                <span>{point}</span>
                                            </motion.li>
                                        ))}
                                    </ul>
                                </motion.div>
                            </AnimatePresence>
                        </div>
                    </div>

                </div>

            </div>
        </section>
    );
}
