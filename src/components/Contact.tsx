import BookingForm from "./BookingForm";
import { site } from "@/lib/site";

export default function Contact() {
  const q = encodeURIComponent(`${site.name}, ${site.address}`);
  return (
    <section id="yhteys" className="bg-cream py-20">
      <div className="mx-auto grid max-w-6xl gap-14 px-5 lg:grid-cols-2">
        <div>
          <h2 className="mb-8 font-serif text-4xl">Varaa pöytä tai tila</h2>
          <BookingForm />
        </div>
        <div className="space-y-6">
          <h2 className="font-serif text-4xl">Yhteystiedot</h2>
          <p>{site.address}</p>
          <p>
            <a className="hover:text-flame" href={`tel:${site.phone.replace(/\s/g, "")}`}>{site.phone}</a><br />
            <a className="hover:text-flame" href={`mailto:${site.email}`}>{site.email}</a>
          </p>
          <ul className="text-sm">{site.hours.map(([d, t]) => <li key={t}><strong>{d}</strong> · {t}</li>)}</ul>
          <iframe title="Kartta" src={`https://www.google.com/maps?q=${q}&output=embed`} loading="lazy" className="h-72 w-full rounded-2xl border-0" />
          <a className="inline-block text-sm uppercase tracking-widest text-flame hover:underline" target="_blank" rel="noreferrer" href={`https://www.google.com/maps/search/?api=1&query=${q}`}>Avaa Google Mapsissa →</a>
        </div>
      </div>
    </section>
  );
}
