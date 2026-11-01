export default function Logo({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2 font-serif text-2xl tracking-wide ${className}`}>
      <svg viewBox="0 0 24 32" className="h-6 w-auto text-flame" fill="currentColor" aria-hidden>
        <path d="M12 0c1 6 9 9 9 19a9 9 0 0 1-18 0c0-4 2-6 4-8 0 3 1 4 2 4 1-5-1-9 3-15z" />
      </svg>
      Pikku Liekki
    </span>
  );
}
