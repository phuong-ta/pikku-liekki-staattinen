import type { Menu } from "@/lib/menu";
import { site } from "@/lib/site";

export default function MenuSection({ menu }: { menu: Menu }) {
  return (
    <section id="menu" className="bg-cream py-20">
      <div className="mx-auto max-w-2xl px-5 text-center">
        <h2 className="font-serif text-4xl sm:text-5xl">Lounaslista</h2>
        <p className="mt-3 text-sm uppercase tracking-[0.3em] text-flame">{menu.title}</p>
        {site.lunchPrice && <p className="mt-2 text-ink/70">Buffet {site.lunchPrice}</p>}

        {/* Merkinnät */}
        <div className="mx-auto mt-8 flex flex-wrap justify-center gap-x-6 gap-y-2 rounded-2xl bg-white px-6 py-4 text-sm text-ink/70">
          {menu.legend.map((l) => (
            <span key={l.code}><strong className="text-ink">{l.code}</strong> = {l.label}</span>
          ))}
        </div>

        <div className="mt-12 space-y-12">
          {menu.days.map((d) => (
            <div key={d.day}>
              <h3 className="mb-5 font-serif text-2xl uppercase tracking-[0.25em]">{d.day}</h3>
              <ul className="space-y-2.5">
                {d.dishes.map((dish) => (
                  <li key={dish.name} className="text-lg">
                    {dish.name}
                    {dish.tags.length > 0 && <span className="ml-2 text-xs tracking-wider text-flame">{dish.tags.join(", ")}</span>}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
