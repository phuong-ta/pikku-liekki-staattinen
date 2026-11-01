import { gallery } from "@/lib/gallery";

export default function Gallery() {
  return (
    <section id="galleria" className="mx-auto max-w-6xl px-5 py-20">
      <h2 className="mb-12 text-center font-serif text-4xl">Galleria</h2>
      <div className="grid auto-rows-[200px] grid-cols-2 gap-3 md:grid-cols-3">
        {gallery.map((im) => (
          <div key={im.src} className={`overflow-hidden rounded-2xl ${im.tall ? "row-span-2" : ""}`}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={im.src} alt={im.alt} loading="lazy" className="h-full w-full object-cover transition duration-700 hover:scale-105" />
          </div>
        ))}
      </div>
    </section>
  );
}
