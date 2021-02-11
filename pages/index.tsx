import Head from 'next/head'
import MainLayout from '../components/MainLayout'

const Home = () => {
  return (
    <>
      <Head>
        <title>Home | Cinema</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MainLayout>
        Home
      </MainLayout>
    </>
  )
}

export default Home;
