import Head from "next/head";

function About() {
  return (
    <div className="bg-gray-50 h-screen">
      <Head>
        <title>About page</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>This is about page!!! Let'see how to use tailwind css</h1>
      </main>
    </div>
  );
}

export default About;
