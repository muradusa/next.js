import Head from "next/head";
import Image from "next/image";

import { MenuIcon } from "@heroicons/react/outline";

function About() {
  return (
    <div className="bg-gray-50 h-screen">
      <Head>
        <title>About page</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>This is about page!!!</h1>
      </main>
    </div>
  );
}

export default About;
