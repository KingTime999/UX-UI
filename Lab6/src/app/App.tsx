import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Features } from "./components/Features";
import { Pricing } from "./components/Pricing";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

const HERO_IMAGE =
  "https://images.unsplash.com/photo-1591680413056-203837ddcc56?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbWFydCUyMHdhc3RlJTIwYmluJTIwdGVjaG5vbG9neSUyMEFJJTIwZnV0dXJpc3RpY3xlbnwxfHx8fDE3NzUxMzgzOTZ8MA&ixlib=rb-4.1.0&q=80&w=1080";

export default function App() {
  return (
    <div
      className="min-h-screen w-full"
      style={{ fontFamily: "Poppins, sans-serif" }}
    >
      <Navbar />
      <main>
        <Hero heroImage={HERO_IMAGE} />
        <Features />
        <Pricing />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
