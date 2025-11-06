'use client';

import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

type TimelineItem = {
  title: string;
  description: string;
  accent: string;
  icon: ReactNode;
};

type TimelineProps = {
  items: TimelineItem[];
};

export function Timeline({ items }: TimelineProps) {
  return (
    <div className="relative pl-6">
      <div className="absolute left-2 top-0 h-full w-px bg-gradient-to-b from-primary-light/60 via-slate-600/30 to-transparent" />
      <div className="flex flex-col gap-8">
        {items.map((item, index) => (
          <motion.article
            key={item.title}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1, duration: 0.4, ease: 'easeOut' }}
            viewport={{ once: true, amount: 0.3 }}
            className="relative rounded-3xl border border-slate-700/30 bg-slate-900/40 p-6"
          >
            <div className="absolute -left-9 top-6 flex h-14 w-14 items-center justify-center rounded-2xl border border-slate-600/40 bg-slate-900/80 text-accent">
              {item.icon}
            </div>
            <p className="text-xs uppercase tracking-widest text-primary-light">
              {item.accent}
            </p>
            <h3 className="mt-2 text-xl font-semibold text-white">{item.title}</h3>
            <p className="mt-2 text-sm text-slate-300">{item.description}</p>
          </motion.article>
        ))}
      </div>
    </div>
  );
}
