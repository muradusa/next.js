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
      <nav>
        <div className=" bg-blue-200 w-full flex">
          <div className=" h-20 w-1/2">
            <Image
              className="object-contain"
              src="/logo.png"
              alt="logo"
              height={100}
              width={500}
              layout="responsive"
            />
          </div>
          <div className="flex w-1/2 bg-gray-200 justify-end text-lg">
            <MenuIcon className="h6 w-6" />

            <ul className="hidden flex space-x-5 mr-10 capitalize items-center ">
              <li className="">home</li>
              <li>about</li>
              <li>contact</li>
              <li>projects</li>
            </ul>
          </div>
        </div>
      </nav>
      <main>
        <h1>This is about page!!!</h1>
      </main>
    </div>
  );
}

export default About;
