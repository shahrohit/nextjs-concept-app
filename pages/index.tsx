import Head from 'next/head'
// import Image from 'next/image'
import { Inter } from '@next/font/google'
import Link from 'next/link'
import Image from 'next/image'
import Layout from '../components/Layout'
// import styles from '../styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>My next</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        home Page
        <Link href="/first-post">first post</Link>
        <Link href="/blogs">blogs</Link>
        

        <div>
          <Image src="/images/profile.jpg" height={200} width={200} alt="profile pic"/>
        </div>
        
      </Layout>
    </>
  )
}
