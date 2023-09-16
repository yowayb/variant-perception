import Line from '../../line';
import Date from '../../date';
import Head from 'next/head';
import Container from '../../container';
import { getAllPostIds, getPostData } from '../../../lib/posts';
import { getData } from '../../../lib/get-data';

export async function generateStaticParams() {
  return getAllPostIds();
}

export default async function Post({ params }) {
  const postData = await getPostData(params.id);
  return (
    <Container>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <article className="prose dark:text-slate-300">
        <h1 className="text-3xl font-bold dark:text-slate-300">{postData.title}</h1>
        <div className="text-slate-500 dark:text-slate-400">
          <Date dateString={postData.date} />
        </div>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
        <div className="h-72">
          <Line data={await getData('cli-g20-monthly')} />
        </div>
      </article>
    </Container>
  );
}
