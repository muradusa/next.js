import Head from "next/head";

function About({ pages }) {
  console.log(pages.nodes[0]);

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
            <div>
              <h1>{page.title}</h1>
              <p>{page.slug}</p>
            </div>
          ))} */}
        </>
      </main>
    </div>
  );
}

export default About;

export async function getStaticProps() {
  const res = await fetch("https://muradc3.sg-host.com/graphql", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      query: `
        query MyQuery {
          pages {
            nodes {
              slug
              title
              featuredImage {
                node {
                  link
                }
              }
            }
          }
        }
        `,
    }),
  });

  const json = await res.json();

  return {
    props: {
      pages: json.data.pages.nodes,
    },
  };
}
