import type { Config } from "tailwindcss";
export default {
  content: ["./src/**/*.{ts,tsx}"],
  theme: { extend: {
    // Vaihda värit tästä: ink = teksti, cream = vaalea tausta, flame = liekin aksenttiväri
    colors: { ink: "#1A1A1A", cream: "#FAF6F0", flame: "#F26A3D" },
    fontFamily: { sans: ["var(--font-sans)"], serif: ["var(--font-serif)"] },
  } },
} satisfies Config;
