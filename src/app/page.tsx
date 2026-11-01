import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import MenuSection from "@/components/MenuSection";
import Gallery from "@/components/Gallery";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { getMenu } from "@/lib/menu";

export default async function Page() {
  const menu = await getMenu(); // luetaan content/menu.txt buildin aikana
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <MenuSection menu={menu} />
        <Gallery />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
