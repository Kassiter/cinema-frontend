import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

const Home = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        Home <Link href='/search'>Search</Link>
      </main>
    </div>
  )
}

export default Home;
