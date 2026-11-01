import { site } from "@/lib/site";
import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="py-12 text-sm text-ink/60">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-5 text-center">
        <Logo className="text-ink" />
        <div className="flex gap-6">
          {site.socials.map(([n, href]) => <a key={n} href={href} className="transition hover:text-flame">{n}</a>)}
        </div>
        <p>© {new Date().getFullYear()} {site.name}. Kaikki oikeudet pidätetään.</p>
      </div>
    </footer>
  );
}
