'use client';

import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

type FeatureCardProps = {
  icon: ReactNode;
  title: string;
  description: string;
  items?: string[];
  delay?: number;
};

export function FeatureCard({
  icon,
  title,
  description,
  items,
  delay = 0,
}: FeatureCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.45, ease: 'easeOut' }}
      viewport={{ once: true, amount: 0.3 }}
      className="glass-surface flex flex-col gap-4 rounded-3xl p-6"
    >
      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary-dark/70 text-accent">
        {icon}
      </div>
      <div>
        <h3 className="text-lg font-semibold text-white">{title}</h3>
        <p className="mt-1 text-sm text-slate-300">{description}</p>
      </div>
      {items?.length ? (
        <ul className="space-y-2 text-sm text-slate-300">
          {items.map((item) => (
            <li key={item} className="flex items-center gap-2">
              <span className="inline-flex h-2 w-2 rounded-full bg-accent" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      ) : null}
    </motion.div>
  );
}
