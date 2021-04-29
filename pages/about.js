import Head from "next/head";

function About({ products }) {
  console.log(products);

  return (
    <div className="bg-gray-50 h-screen">
      <Head>
        <title>About page</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>This is about page!!! Let'see how to use tailwind css</h1>
        <>
          {/* {pages.map((page) => (
            <div key={page.slug}>
              <h1>{page.title}</h1>
            </div>
          ))} */}
        </>
      </main>
    </div>
  );
}

export default About;

export async function getStaticProps() {
  const res = await fetch("https://allthingsturkmen.com/graphql", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      query: `
      query MyQuery {
        products {
          nodes
        }
      }
      
        `,
    }),
  });

  const json = await res.json();

  return {
    props: {
      products: json.data,
    },
  };
}
