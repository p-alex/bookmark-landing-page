import Head from "next/head";
import MobileNavBar from "../components/MobileNavBar";
import NavBar from "../components/NavBar";
import Hero from "../components/Hero";
import Features from "../components/Features";
import Download from "../components/Download";
import FAQ from "../components/FAQ";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
export default function Home() {
  return (
    <>
      <Head>
        <title>Bookmark Landing Page | Frontend Mentor Challenge</title>
        <link rel="icon" type="image/png" href="/images/favicon-32x32.png" />
      </Head>
      <MobileNavBar />
      <NavBar />
      <Hero />
      <Features />
      <Download />
      <FAQ />
      <Newsletter />
      <Footer />
    </>
  );
}
