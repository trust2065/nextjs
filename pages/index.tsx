import { GetStaticProps } from "next";
import Head from "next/head";
import Link from "next/link";

import { getSortedPostsData } from "../lib/posts";
import Date from "../components/date";
import Layout, { siteTitle } from "../components/layout";
import type { Post } from "./posts/[id]";
import utilStyles from "../styles/utils.module.css";

export const getStaticProps: GetStaticProps = async () => {
  // const allPostsData = getSortedPostsData();
  // console.log(JSON.stringify(allPostsData2, null, 2));

  const allPostsData: Post.Data[] = [
    { contentHtml: "test", id: "1", date: "2022-03-22", title: "test" },
  ];
  return {
    props: {
      allPostsData,
    },
  };
};

export default function Home({ allPostsData }: HomePageProps) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>The adventure back to 2009, where all this has started.</p>
        <p>
          <small>
            As a developer, I found the best way to help building the next
            generation of world is by providing my knowledge and passion into
            web developing world.
          </small>
        </p>
      </section>
      <section>
        <h2>Blog</h2>
        <ul>
          {allPostsData.map(({ id, date, title }: Post.Data) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}

interface HomePageProps {
  allPostsData: Post.Data[];
}
