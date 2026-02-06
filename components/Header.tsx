'use client';

import Link from 'next/link';

export default function Header() {
    return (
        <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-6 transition-all duration-300 md:px-12">
            {/* Logo */}
            <Link href="/" className="group flex items-center gap-2">
                <div className="relative h-8 w-8 overflow-hidden rounded-full border border-white/20 bg-white/10 backdrop-blur-sm transition-colors group-hover:bg-white/20">
                    <svg
                        viewBox="0 0 100 100"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="8"
                        className="h-full w-full p-2 text-white"
                    >
                        <path d="M50 20 L80 80 L20 80 Z" />
                    </svg>
                </div>
                <span className="text-sm font-medium tracking-widest text-white uppercase opacity-90">
                    Villa Care Collective
                </span>
            </Link>

            {/* Navigation (Simple) */}
            <nav>
                <Link
                    href="#contact"
                    className="rounded-full border border-white/20 bg-white/5 px-6 py-2 text-xs font-medium tracking-widest text-white backdrop-blur-md transition-colors hover:bg-white/10"
                >
                    INQUIRE
                </Link>
            </nav>
        </header>
    );
}
