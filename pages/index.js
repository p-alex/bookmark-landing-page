import MobileNavBar from "../components/MobileNavBar";
import NavBar from "../components/NavBar";
import Hero from "../components/Hero";
import Features from "../components/Features";
import Download from "../components/Download";
import FAQ from "../components/FAQ";
import Newsletter from "../components/Newsletter";
export default function Home() {
  return (
    <>
      <MobileNavBar />
      <NavBar />
      <Hero />
      <Features />
      <Download />
      <FAQ />
      <Newsletter />
    </>
  );
}
