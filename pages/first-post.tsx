import clsx from "clsx"
import Head from "next/head"
import Link from "next/link"
import Script from "next/script"
import { FC } from "react"
import Layout from "../components/Layout"
import styles from "../styles/alert.module.css"


const FirstPost:FC = () => {
    const type:String="success";
  return (
    <Layout>
    <Head>
      <title>First Post</title>
    </Head>
    <h1  className={clsx({
        [styles.success]: type === 'success',
        [styles.error]: type === 'error',
      })}>First Post</h1>
    <h2>
      <Link href="/">← Back to home</Link>
    </h2>

  </Layout>
  )
}

export default FirstPost