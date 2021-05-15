import Head from "next/head";
import HeroSection from "../components/HeroSection";
import Features from "../components/Features";
import Footer from "../components/Footer";
import Projects from "../components/Projects";
import Contact from "../components/Contact";

function Home(props) {
  return (
    <div className="bg-white h-screen">
      <Head>
        <title>Murad Cholukov - full-stack developer, frontend, backend</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Murad Cholukov's personal website" />
        <meta
          name="keywords"
          content="full-stack developer, html, javascript, React.js, Next.js, front-end developer, web developer, san francisco bay area, software engineer"
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

export async function getStaticProps() {
  return {
    props: {}, // will be passed to the page component as props
  };
}
