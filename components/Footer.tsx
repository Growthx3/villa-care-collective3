'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="w-full bg-background pt-24 pb-12">
            <div className="container mx-auto px-6 md:px-12 lg:px-24">

                {/* Main CTA */}
                <div className="mb-24 flex flex-col items-center text-center">
                    <h2 className="mb-8 text-4xl font-light tracking-tight text-main md:text-5xl lg:text-6xl">
                        Ready to elevate your estate?
                    </h2>
                    <Link
                        href="#contact"
                        className="group flex items-center gap-4 rounded-full bg-accent px-8 py-4 text-white transition-all hover:bg-main"
                    >
                        <span className="text-lg font-medium tracking-wide">GET STARTED</span>
                        <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                    </Link>
                </div>

                {/* Divider */}
                <div className="mb-12 h-[1px] w-full bg-border" />

                {/* Bottom Bar */}
                <div className="flex flex-col items-center justify-between gap-6 text-sm font-medium tracking-wide text-main/60 md:flex-row">
                    <div className="flex gap-8">
                        <Link href="#" className="hover:text-accent">OUR PROCESS</Link>
                        <Link href="#" className="hover:text-accent">SERVICE FEATURES</Link>
                        <Link href="#" className="hover:text-accent">THE COLLECTIVE STORY</Link>
                    </div>

                    <div className="text-center md:text-right">
                        <p>&copy; {new Date().getFullYear()} Villa Care Collective.</p>
                    </div>
                </div>

            </div>
        </footer>
    );
}
