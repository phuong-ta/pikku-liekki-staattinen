import { promises as fs } from "fs";
import path from "path";

export type Dish = { name: string; tags: string[] };
export type Menu = { title: string; legend: { code: string; label: string }[]; days: { day: string; dishes: Dish[] }[] };

/** Lukee content/menu.txt: "Annos | L, G" (hinta ei tarvita, buffet on tasahintainen). */
export async function getMenu(): Promise<Menu> {
  const raw = await fs.readFile(path.join(process.cwd(), "content", "menu.txt"), "utf8");
  const menu: Menu = { title: "", legend: [], days: [] };
  let legend = false;
  for (const line of raw.split(/\r?\n/).map((s) => s.trim())) {
    if (!line) continue;
    if (line.startsWith("#")) { menu.title = line.replace(/^#\s*/, ""); continue; }
    const sec = line.match(/^\[(.+)\]$/);
    if (sec) {
      legend = sec[1].toLowerCase() === "merkinnät";
      if (!legend) menu.days.push({ day: sec[1], dishes: [] });
      continue;
    }
    if (legend) {
      const [code, ...rest] = line.split("=");
      menu.legend.push({ code: code.trim(), label: rest.join("=").trim() });
    } else {
      const [name, tags = ""] = line.split("|").map((s) => s.trim());
      menu.days.at(-1)?.dishes.push({ name, tags: tags.split(",").map((t) => t.trim()).filter(Boolean) });
    }
  }
  return menu;
}
