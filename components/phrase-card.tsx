'use client';

import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import { PronunciationButton } from './pronunciation-button';

type PhraseCardProps = {
  title: string;
  description: string;
  example: string;
  translation: string;
  tags: string[];
  delay?: number;
};

export function PhraseCard({
  title,
  description,
  example,
  translation,
  tags,
  delay = 0,
}: PhraseCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.4, ease: 'easeOut' }}
      viewport={{ once: true, amount: 0.3 }}
      className="glass-surface relative flex flex-col gap-4 rounded-3xl p-6"
    >
      <div className="flex items-center gap-2 text-xs font-medium uppercase tracking-wide text-slate-300">
        <Sparkles className="h-3.5 w-3.5 text-accent" />
        Shprehje thelbësore
      </div>
      <h3 className="text-xl font-semibold text-white">{title}</h3>
      <p className="text-sm text-slate-300">{description}</p>
      <div className="rounded-2xl border border-slate-600/40 bg-slate-900/60 p-4">
        <p className="text-sm font-semibold text-primary-light">{example}</p>
        <p className="text-sm text-slate-300">
          <span className="font-semibold text-slate-200">Përkthimi: </span>
          {translation}
        </p>
      </div>
      <div className="flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full border border-primary-light/40 bg-primary-dark/40 px-3 py-1 text-xs font-medium text-slate-100"
          >
            #{tag}
          </span>
        ))}
      </div>
      <PronunciationButton text={example} />
    </motion.article>
  );
}
