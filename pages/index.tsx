import { GetStaticProps } from 'next';
import Head from 'next/head';
import Link from "next/link";
import Layout, { siteTitle } from '../components/layout/layout';
import { getSortedPostsData } from '../lib/posts';
import Date from '../components/date';
import utilStyles from '../styles/utils.module.css'

export const getStaticProps: GetStaticProps = async () => {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}

export default function Home({ allPostsData }: {
  allPostsData: {
    date: string
    title: string
    id: string
  }[]
}) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Bienvenido! Mi nombre es Matias, Soy Desarrollador Web Fullstack.</p>
        <p> Actualmente me encuentro cursando 3er año de la Lic. Sistemas de Información en <Link href="http://www.unlu.edu.ar">Universidad Nacional de Luján</Link>.</p>
        <p>Este es un pequeño blog realizado en Next js donde voy a ir publicando anotaciones sobre distintos temas de desarrollo</p>
        <p> Gracias por tu visita!</p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
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
  )
}