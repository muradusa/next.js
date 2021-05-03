import Head from "next/head";
import HeroSection from "../components/HeroSection";
import Features from "../components/Features";
import Footer from "../components/Footer";
import Projects from "../components/Projects";
import Contact from "../components/Contact";

function Home() {
  return (
    <div className="bg-gray-50 h-screen">
      <Head>
        <title>Murad Cholukov</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Murad Cholukov's personal website" />
        <meta
          name="keywords"
          content="full-stack developer, html, javascript, React.js, Next.js, front-end developer, web developer, san francisco bay area"
        />
      </Head>

      <main>
        <HeroSection />
        <Features />
        <Projects />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}

export default Home;
