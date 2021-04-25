import Head from "next/head";
import HeroSection from "../components/HeroSection";
import Features from "../components/Features";

function Home() {
  return (
    <div className="bg-gray-50 h-screen">
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <HeroSection />
        <Features />
      </main>
    </div>
  );
}

export default Home;
