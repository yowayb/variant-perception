import Link from 'next/link';
import Date from './date';
import Container from './container';

export default function Home({ allPostsData }) {
  return (
    <Container>
      <section className="text-lg p-1">
        <h2 className="text-2xl/8">Insights</h2>
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

