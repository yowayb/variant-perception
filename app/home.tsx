import Link from 'next/link';
import Date from './date';
import Head from 'next/head';
import Container from './container';
import utilStyles from '../styles/utils.module.css';

export default function Home({ allPostsData }) {
  return (
    <Container home>
      <Head>
        <title>Variant Perception</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Avast Matey!</p>
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>{title}</Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Container>
  );
}

