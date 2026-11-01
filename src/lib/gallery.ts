// Vaihda omat kuvat: lataa kuvat kansioon public/gallery/ ja kirjoita polku, esim. "/gallery/sali.jpg"
const u = (id: string) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=1000&q=75`;
export const gallery = [
  { src: u("photo-1517248135467-4c7edcad34c4"), alt: "Ravintolasali", tall: true },
  { src: u("photo-1556761175-5973dc0f32e7"), alt: "Kokoustila" },
  { src: u("photo-1504674900247-0877df9cc836"), alt: "Lounasannos" },
  { src: u("photo-1555396273-367ea4eb4db5"), alt: "Juhlatila", tall: true },
  { src: u("photo-1414235077428-338989a2e8c0"), alt: "Annos" },
  { src: u("photo-1497366216548-37526070297c"), alt: "Toimistotila" },
];
