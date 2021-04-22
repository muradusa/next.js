import Head from "next/head";
import Image from "next/image";

import { MenuIcon } from "@heroicons/react/outline";

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Murad Cholukov</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col align-middle bg-blue-200 h-screen">
        <h1 className="h-screen flex flex-col align-middle">
          This is my next.js app
        </h1>
      </main>

      <footer className=""></footer>
    </div>
  );
}
