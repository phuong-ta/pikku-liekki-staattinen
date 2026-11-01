import { site } from "@/lib/site";
import Logo from "./Logo";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-ink/5 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-5 py-3 sm:flex-row sm:py-4">
        <a href="#"><Logo /></a>
        <nav className="flex gap-5 text-xs uppercase tracking-[0.2em] sm:gap-8">
          {site.nav.map(([id, label]) => (
            <a key={id} href={`#${id}`} className="border-b-2 border-transparent pb-0.5 transition hover:border-flame">{label}</a>
          ))}
        </nav>
      </div>
    </header>
  );
}
