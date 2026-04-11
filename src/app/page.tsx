import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { Team } from "@/components/Team";
import { Space } from "@/components/Space";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <Team />
        <Space />
      </main>
      <Footer />
    </>
  );
}
