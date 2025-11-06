"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  BookOpen,
  Compass,
  Heart,
  MicVocal,
  Music3,
  PenLine,
  Sparkles,
} from "lucide-react";
import { PronunciationButton } from "@/components/pronunciation-button";
import { PhraseCard } from "@/components/phrase-card";
import { FeatureCard } from "@/components/feature-card";
import { Timeline } from "@/components/timeline";

const heroPhrases = [
  "Mirë se erdhe në universin e shqipes.",
  "Gjuha jonë tingëllon si ninullë dhe si këngë heroike.",
  "Zbulo historitë, fjalët dhe tingujt që na bashkojnë.",
];

const essentialPhrases = [
  {
    title: "Hap një bisedë të ngrohtë",
    description:
      "Përdoret kur dëshiron të shprehësh mirënjohje të thellë dhe respekt në një takim të veçantë.",
    example: "Është nder të të kem përballë sot.",
    translation: "It is an honor to have you in front of me today.",
    tags: ["mirësjellje", "nder", "mikpritje"],
  },
  {
    title: "Ftesë për të mësuar së bashku",
    description:
      "Një mënyrë intime për të ftuar dikë të mësojë, të ndajë dije ose të krijojë diçka të re.",
    example: "Ta ndajmë këtë fjalë dhe ta bëjmë tonën.",
    translation: "Let us share this word and make it ours.",
    tags: ["bashkëpunim", "mësim", "krijimtari"],
  },
  {
    title: "Forcë dhe krenari",
    description:
      "Shpreh frymën shqiptare, kur dikush krenohet me sfidat e përbashkëta dhe me rrënjët e veta.",
    example: "Nga mali në det, ne flasim me të njëjtin zjarr.",
    translation: "From the mountains to the sea, we speak with the same fire.",
    tags: ["identitet", "kulturë", "frymëzim"],
  },
];

const features = [
  {
    title: "Mësime që prekin zemrën",
    description:
      "Shprehje të përditshme, poezi dhe dialogë që lidhin gjeneratat.",
    items: [
      "Dialogë për situata reale",
      "Fjalorth i përzgjedhur me shpjegime emocionale",
      "Ushtrime që rrisin vetëbesimin në të folur",
    ],
    icon: <Heart className="h-6 w-6" />,
    delay: 0,
  },
  {
    title: "Zëra dhe ritme shqipe",
    description:
      "Përjeto të folurit me tingull natyral falë teknologjisë së zërit.",
    items: [
      "Lexim i udhëzuar me ritëm të personalizuar",
      "Ngrohje vokale me fraza të shkurtra muzikore",
      "Playlist me këngë tradicionale e moderne",
    ],
    icon: <Music3 className="h-6 w-6" />,
    delay: 0.1,
  },
  {
    title: "Krijo historitë e tua",
    description:
      "Udhëzues për të shkruar tregime të shkurtra dhe për t’i ndarë me komunitetin.",
    items: [
      "Shabllone për ditarë personalë",
      "Sfidat “Një fjali në ditë”",
      "Mentor virtual për të përmirësuar stilin",
    ],
    icon: <PenLine className="h-6 w-6" />,
    delay: 0.2,
  },
];

const timelineItems = [
  {
    title: "Nis me tingullin e parë",
    description:
      "Një udhëtim që nis me përshëndetje të thjeshta, ritme dialektesh dhe fjalë dashurie.",
    accent: "Muaji 1",
    icon: <Sparkles className="h-6 w-6" />,
  },
  {
    title: "Ndërtim i fjalive të sigurta",
    description:
      "Kupto strukturat gramatikore përmes shembujve të jetës së përditshme dhe situatave të punës.",
    accent: "Muaji 2",
    icon: <BookOpen className="h-6 w-6" />,
  },
  {
    title: "Fol me ritëm natyral",
    description:
      "Dialogë të drejtpërdrejtë, feedback i menjëhershëm dhe ushtrime me zë që të bëjnë të ndjesh ritmin e shqipes.",
    accent: "Muaji 3",
    icon: <MicVocal className="h-6 w-6" />,
  },
  {
    title: "Guxo të krijosh",
    description:
      "Shkruaj dhe trego histori që lidhen me qytetin, familjen dhe kujtimet e tua të preferuara.",
    accent: "Muaji 4",
    icon: <Compass className="h-6 w-6" />,
  },
];

export default function Page() {
  return (
    <main className="grid-overlay relative overflow-hidden">
      <section className="relative mx-auto flex min-h-screen max-w-6xl flex-col gap-16 px-6 pb-24 pt-28 md:px-10 lg:flex-row lg:items-center lg:gap-20">
        <div className="absolute -left-96 top-1/4 h-96 w-96 rounded-full bg-primary/20 blur-3xl" />
        <div className="absolute -right-96 bottom-0 h-96 w-96 rounded-full bg-accent/20 blur-3xl" />
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative z-10 max-w-2xl space-y-8"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-primary-light/40 bg-primary-dark/40 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-primary-light">
            A flet shqip?
          </span>
          <h1 className="text-4xl font-semibold text-slate-100 sm:text-5xl lg:text-6xl">
            Fjalët tona janë urë që lidhin zemrat.{" "}
            <span className="highlight-word text-white">Mëso shqipen</span> me
            ritëm dhe dashuri.
          </h1>
          <p className="max-w-xl text-lg text-slate-300">
            Platforma “A flet shqip” të udhëheq në çdo hap - nga tingujt e
            parë, tek krijimi i tregimeve tuaja personale. Këtu gjen zëra,
            kujtime, këshilla gramatikore dhe komunitet që frymëzon.
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <PronunciationButton text="Mirë se erdhe! A jemi gati të flasim shqip bashkë?" />
            <motion.div
              initial={{ opacity: 0, x: 12 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-col text-xs text-slate-400"
            >
              <span>Teknologji e zërit</span>
              <span>Kultura & tradita të gjalla</span>
            </motion.div>
          </div>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.2, delayChildren: 0.6 },
              },
            }}
            className="space-y-3 rounded-3xl border border-slate-600/40 bg-slate-900/50 p-6"
          >
            {heroPhrases.map((phrase) => (
              <motion.p
                key={phrase}
                variants={{
                  hidden: { opacity: 0, y: 10 },
                  visible: { opacity: 1, y: 0 },
                }}
                className="text-sm text-slate-300 sm:text-base"
              >
                {phrase}
              </motion.p>
            ))}
          </motion.div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 24 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="relative z-10 flex flex-1 justify-center lg:justify-end"
        >
          <div className="glass-surface relative overflow-hidden rounded-[40px] border border-slate-600/30 bg-slate-900/60 p-6 shadow-2xl">
            <div className="absolute inset-0 opacity-40">
              <Image
                src="https://images.unsplash.com/photo-1526382551041-3c817fc3d478?auto=format&fit=crop&w=900&q=80"
                alt="Valë shqiptare"
                fill
                className="object-cover mix-blend-overlay"
                priority
              />
            </div>
            <div className="relative space-y-4">
              <div className="flex items-center gap-3 text-sm text-slate-200">
                <Heart className="h-4 w-4 text-accent" />
                Frymë shqiptare
              </div>
              <blockquote className="space-y-3 text-lg font-serif text-slate-100">
                <p>
                  “Kur flasim shqip, ne zgjojmë kujtesën e gurëve të kalasë, zërin e
                  valëve dhe lulëzimin e fjalës ‘dashuri’.”
                </p>
                <footer className="text-sm text-slate-300">
                  — Mentorët e “A flet shqip”
                </footer>
              </blockquote>
              <div className="rounded-2xl border border-primary-dark/50 bg-slate-950/70 p-4">
                <p className="text-xs uppercase tracking-[0.3em] text-primary-light">
                  Rituali i përditshëm
                </p>
                <p className="mt-2 text-sm text-slate-300">
                  1. Dëgjo tingullin • 2. Lexo me zë • 3. Përkthe nga zemra • 4.
                  Shkruaj kujtimet e tua.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      <section className="relative mx-auto max-w-6xl px-6 pb-24 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.45 }}
          className="mb-12 max-w-2xl"
        >
          <span className="text-xs uppercase tracking-[0.4em] text-primary-light">
            Fjalori i shpirtit
          </span>
          <h2 className="mt-4 text-3xl font-semibold text-slate-100 md:text-4xl">
            Shprehje që të bëjnë të ndihesh në shtëpi, kudo që të jesh.
          </h2>
          <p className="mt-4 text-slate-300">
            Çdo frazë është zgjedhur nga mentorë, poetë dhe gjyshër që e mbajnë
            gjallë gjuhën shqipe në përditshmëri.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {essentialPhrases.map((phrase, index) => (
            <PhraseCard
              key={phrase.title}
              {...phrase}
              delay={index * 0.1}
            />
          ))}
        </div>
      </section>

      <section className="relative mx-auto max-w-6xl px-6 pb-24 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.45 }}
          className="mb-12 flex flex-col gap-4 md:flex-row md:items-end md:justify-between"
        >
          <div>
            <span className="text-xs uppercase tracking-[0.4em] text-primary-light">
              Udhëtim i gjuhës
            </span>
            <h2 className="mt-4 text-3xl font-semibold text-slate-100 md:text-4xl">
              Nga përshëndetjet tek krijimi i tregimeve të tua të para.
            </h2>
          </div>
          <p className="max-w-xl text-slate-300">
            Programi ynë 4-mujor të çon nga bazat në rrjedhshmëri, duke përdorur
            audio, kujtime personale dhe sfida krijuese që ushqejnë pasionin për
            shqipen.
          </p>
        </motion.div>
        <Timeline items={timelineItems} />
      </section>

      <section className="relative mx-auto max-w-6xl px-6 pb-28 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.45 }}
          className="mb-12 max-w-2xl"
        >
          <span className="text-xs uppercase tracking-[0.4em] text-primary-light">
            Elementët që na dallojnë
          </span>
          <h2 className="mt-4 text-3xl font-semibold text-slate-100 md:text-4xl">
            Më shumë se mësim - një rit i përditshëm që të bën të flasësh me
            zemër.
          </h2>
        </motion.div>
        <div className="grid gap-6 md:grid-cols-3">
          {features.map((feature) => (
            <FeatureCard key={feature.title} {...feature} />
          ))}
        </div>
      </section>

      <footer className="mx-auto max-w-6xl px-6 pb-16 md:px-10">
        <div className="glass-surface overflow-hidden rounded-3xl border border-slate-700/30 bg-slate-900/60 px-6 py-10 sm:px-10">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <span className="text-xs uppercase tracking-[0.4em] text-primary-light">
                Bashko komunitetin
              </span>
              <h3 className="mt-3 text-2xl font-semibold text-white">
                Flasim shqip çdo ditë, në çdo zonë kohore.
              </h3>
              <p className="mt-3 max-w-md text-sm text-slate-300">
                Regjistrohu për të marrë ushtrime javore, fjalë të reja dhe
                histori frymëzuese nga diaspora.
              </p>
            </div>
            <form className="flex w-full max-w-md flex-col gap-3 text-sm md:flex-row">
              <label className="sr-only" htmlFor="email">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="email@shembull.com"
                className="w-full rounded-full border border-slate-600/50 bg-slate-950/80 px-5 py-3 text-slate-100 placeholder:text-slate-500 focus:border-primary-light focus:outline-none focus:ring-2 focus:ring-primary-light/60"
                required
              />
              <button
                type="submit"
                className="rounded-full bg-accent px-6 py-3 font-semibold text-slate-950 transition hover:bg-accent/90 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent/80"
              >
                Nisu sot
              </button>
            </form>
          </div>
          <div className="mt-8 flex flex-col gap-2 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">
            <p>© {new Date().getFullYear()} A flet shqip. Të gjitha të drejtat e rezervuara.</p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#"
                className="transition hover:text-primary-light"
                aria-label="Rregullat e komunitetit"
              >
                Rregullat e komunitetit
              </a>
              <a
                href="#"
                className="transition hover:text-primary-light"
                aria-label="Politika e privatësisë"
              >
                Privatësia
              </a>
              <a
                href="#"
                className="transition hover:text-primary-light"
                aria-label="Na shkruaj"
              >
                Na shkruaj
              </a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
