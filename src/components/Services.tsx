const services = [
  { title: "Buffet-lounas", text: "Ruokalista uusiutuu joka viikko. Nopea, ravitseva ja maukas lounas työpäivän keskelle – tasahintainen buffet." },
  { title: "Kokoustilat", text: "Yksityinen tila, jossa on projektori ja nopea wifi. Sopii työpajoihin ja asiakastapaamisiin." },
  { title: "Juhlat ja tilaisuudet", text: "Pikkujoulut, syntymäpäivät ja pienet ja keskisuuret seminaarit – räätälöity tarjoilu." },
];

export default function Services() {
  return (
    <section id="palvelut" className="mx-auto max-w-6xl px-5 py-20">
      <h2 className="mb-12 text-center font-serif text-4xl">Palvelut</h2>
      <div className="grid gap-6 md:grid-cols-3">
        {services.map((s, i) => (
          <article key={s.title} className="rounded-2xl bg-cream p-8 transition hover:-translate-y-1 hover:shadow-lg">
            <span className="text-sm font-semibold text-flame">0{i + 1}</span>
            <h3 className="mt-2 font-serif text-2xl">{s.title}</h3>
            <p className="mt-3 text-ink/70">{s.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
