'use client';

import { motion } from 'framer-motion';

export default function StatementModule() {
    return (
        <section className="relative flex min-h-[50vh] w-full items-center justify-center bg-background py-24 px-6">
            <div className="relative w-full max-w-4xl text-center">
                {/* Top Divider */}
                <motion.div
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    transition={{ duration: 1, ease: "circOut" }}
                    viewport={{ once: true }}
                    className="mx-auto mb-16 h-[1px] w-full bg-secondary bg-opacity-30 md:w-3/4"
                />

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="text-2xl font-light leading-relaxed text-main md:text-3xl lg:text-4xl"
                >
                    We design technical maintenance programs for world-class estates—and execute them with precision.
                </motion.p>

                {/* Bottom Divider */}
                <motion.div
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    transition={{ duration: 1, ease: "circOut", delay: 0.4 }}
                    viewport={{ once: true }}
                    className="mx-auto mt-16 h-[1px] w-full bg-secondary bg-opacity-30 md:w-3/4"
                />
            </div>
        </section>
    );
}
