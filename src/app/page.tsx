import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Properties from "@/components/Properties";
import About from "@/components/About";
import Agents from "@/components/Agents";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Properties />
      <About />
      <Agents />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
}
