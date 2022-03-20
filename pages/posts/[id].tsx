import Layout from "../../components/layout";
import { getAllPostIds, getPostData } from "../../lib/posts";
import Head from "next/head";
import Date from "../../components/date";
import utilStyles from "../../styles/utils.module.css";

export default function Post({ postData }: Post) {
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <article>
        <h1 className={utilStyles.headingX1}>{postData.title}</h1>
        <div className={utilStyles.lightText}>
          <Date dateString={postData.date} />
        </div>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }}></div>
      </article>
    </Layout>
  );
}

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }: URLParams) {
  const postData = await getPostData(params.id);

  return {
    props: {
      postData,
    },
  };
}

export interface Post {
  postData: Post.Data;
}

export namespace Post {
  export interface Data {
    id: string;
    title: string;
    date: string;
    contentHtml: string;
  }
}

export interface URLParams {
  params: {
    id: string;
  };
}
