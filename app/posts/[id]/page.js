import Chart from '../../chart';
import Date from '../../date';
import Head from 'next/head';
import Container from '../../container';
import { getAllPostIds, getPostData } from '../../../lib/posts';
import utilStyles from '../../../styles/utils.module.css';

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
      <article>
        <h1 className={utilStyles.headingXl}>{postData.title}</h1>
        <div className={utilStyles.lightText}>
          <Date dateString={postData.date} />
        </div>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
        <Chart />
      </article>
    </Container>
  );
}
