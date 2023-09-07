import Link from 'next/link';
import Date from './date';
import Head from 'next/head';
import Container from './container';

export default function Home({ allPostsData }) {
  return (
    <Container home>
      <Head>
        <title>Variant Perception</title>
      </Head>
      <section className="text-xl/8">
        <p>Avast Matey!</p>
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
      <section className="text-lg p-1">
        <h2 className="text-2xl/8">Blog</h2>
        <ul>
          {allPostsData.map(({ id, date, title }) => (
            <li className="leading-8" key={id}>
              <Link href={`/posts/${id}`}>{title}</Link>
              <br />
              <small className="text-slate-500">
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Container>
  );
}

