'use client';

import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { Loader2, Volume2, VolumeX } from 'lucide-react';

type PronunciationButtonProps = {
  text: string;
  className?: string;
};

export function PronunciationButton({
  text,
  className,
}: PronunciationButtonProps) {
  const [voices, setVoices] = useState<SpeechSynthesisVoice[]>([]);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [isReady, setIsReady] = useState(false);
  const utteranceRef = useRef<SpeechSynthesisUtterance | null>(null);

  const preferredVoice = useMemo(() => {
    if (!voices.length) return undefined;
    return (
      voices.find((voice) => voice.lang.toLowerCase().startsWith('sq')) ??
      voices.find((voice) => voice.lang.toLowerCase().startsWith('en-gb')) ??
      voices[0]
    );
  }, [voices]);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const synth = window.speechSynthesis;

    const populateVoices = () => {
      const available = synth.getVoices();
      if (available.length) {
        setVoices(available);
        setIsReady(true);
      }
    };

    populateVoices();
    synth.addEventListener('voiceschanged', populateVoices);

    return () => {
      synth.removeEventListener('voiceschanged', populateVoices);
      synth.cancel();
    };
  }, []);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const handleBoundary = () => setIsSpeaking(true);
    const handleEnd = () => setIsSpeaking(false);

    const utterance = new SpeechSynthesisUtterance();
    utterance.addEventListener('boundary', handleBoundary);
    utterance.addEventListener('end', handleEnd);
    utterance.addEventListener('error', handleEnd);
    utteranceRef.current = utterance;

    return () => {
      utterance.removeEventListener('boundary', handleBoundary);
      utterance.removeEventListener('end', handleEnd);
      utterance.removeEventListener('error', handleEnd);
    };
  }, []);

  const speak = useCallback(() => {
    if (typeof window === 'undefined' || !utteranceRef.current) return;
    const synth = window.speechSynthesis;
    synth.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    if (preferredVoice) {
      utterance.voice = preferredVoice;
      utterance.lang = preferredVoice.lang;
    }
    utterance.pitch = 1;
    utterance.rate = 0.95;
    utterance.volume = 1;
    utterance.onstart = () => setIsSpeaking(true);
    utterance.onend = () => setIsSpeaking(false);
    utterance.onerror = () => setIsSpeaking(false);
    synth.speak(utterance);
  }, [preferredVoice, text]);

  const stop = useCallback(() => {
    if (typeof window === 'undefined') return;
    window.speechSynthesis.cancel();
    setIsSpeaking(false);
  }, []);

  const handleClick = useCallback(() => {
    if (!isReady) return;
    if (isSpeaking) {
      stop();
    } else {
      speak();
    }
  }, [isReady, isSpeaking, speak, stop]);

  return (
    <button
      type="button"
      onClick={handleClick}
      disabled={!isReady}
      className={`inline-flex items-center gap-2 rounded-full border border-slate-500/50 bg-slate-900/60 px-4 py-2 text-sm font-medium text-slate-100 transition hover:border-primary-light hover:text-primary-light focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-light disabled:cursor-not-allowed disabled:opacity-60 ${className ?? ''}`}
    >
      {!isReady ? (
        <>
          <Loader2 className="h-4 w-4 animate-spin" />
          Duke u ngarkuar…
        </>
      ) : isSpeaking ? (
        <>
          <VolumeX className="h-4 w-4" />
          Ndalo zërin
        </>
      ) : (
        <>
          <Volume2 className="h-4 w-4" />
          Dëgjo shqipen
        </>
      )}
    </button>
  );
}
