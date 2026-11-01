"use client";
import { useState, FormEvent } from "react";
import { site } from "@/lib/site";

const field = "w-full rounded-xl border border-ink/15 bg-white px-4 py-3 text-sm outline-none transition focus:border-flame";

export default function BookingForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "ok" | "error">("idle");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    setStatus("sending");
    try {
        const data: Record<string, FormDataEntryValue> = {};
        new FormData(form).forEach((value, key) => { data[key] = value; });
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({ access_key: site.formKey, subject: `Uusi varaus: ${data.service} – ${data.name}`, from_name: "Pikku Liekki -sivusto", ...data }),
      });
      const json = await res.json();
      if (!json.success) throw new Error();
      form.reset();
      setStatus("ok");
    } catch {
      setStatus("error");
    }
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <input type="checkbox" name="botcheck" className="hidden" tabIndex={-1} autoComplete="off" />
      <input name="name" required placeholder="Nimi" className={field} />
      <div className="grid gap-4 sm:grid-cols-2">
        <input name="phone" type="tel" required placeholder="Puhelinnumero" className={field} />
        <input name="email" type="email" required placeholder="Sähköposti" className={field} />
      </div>
      <select name="service" required defaultValue="" className={field}>
        <option value="" disabled>Valitse palvelu</option>
        <option>Lounas</option>
        <option>Kokoustila</option>
        <option>Juhlatilaus</option>
      </select>
      <input name="datetime" type="datetime-local" required className={field} />
      <textarea name="message" rows={4} placeholder="Lisätiedot" className={field} />
      <button disabled={status === "sending"} className="rounded-full bg-ink px-8 py-3.5 text-sm uppercase tracking-widest text-white transition hover:bg-flame disabled:opacity-50">
        {status === "sending" ? "Lähetetään…" : "Lähetä varaus"}
      </button>
      {status === "ok" && <p className="text-sm text-green-700">Kiitos! Palaamme asiaan pian.</p>}
      {status === "error" && <p className="text-sm text-red-700">Lähetys epäonnistui. Yritä uudelleen tai soita meille: {site.phone}</p>}
    </form>
  );
}
