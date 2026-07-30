import Footer from "../components/Footer";
import Hero from "../components/Hero";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-white px-8 lg:px-20">
      <Hero />
      <Footer />
    </main>
  );
}