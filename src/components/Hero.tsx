export default function Hero() {
  return (
    <section className="bg-cream">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-16 md:grid-cols-2 md:py-24">
        <div className="text-center md:text-left">
          <p className="mb-5 text-xs uppercase tracking-[0.35em] text-flame">Lounas · Kokoustilat · Juhlat</p>
          <h1 className="font-serif text-5xl leading-tight sm:text-6xl">Pieni liekki, suuri maku.</h1>
          <p className="mt-5 max-w-md text-lg text-ink/70 md:max-w-none">
            Runsas buffet-lounas arkisin, rauhalliset kokoustilat ja lämminhenkiset juhlat – kaikki saman katon alla.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3 md:justify-start">
            <a href="#menu" className="rounded-full bg-ink px-8 py-3.5 text-sm uppercase tracking-widest text-white transition hover:bg-flame">Katso menu</a>
            <a href="#yhteys" className="rounded-full border border-ink/30 px-8 py-3.5 text-sm uppercase tracking-widest transition hover:border-flame hover:text-flame">Varaa pöytä / tila</a>
          </div>
        </div>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1000&q=75" alt="Ravintola Pikku Liekki" className="aspect-[4/3] w-full rounded-3xl object-cover shadow-xl" />
      </div>
    </section>
  );
}
