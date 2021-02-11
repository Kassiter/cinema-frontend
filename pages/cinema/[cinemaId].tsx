import Head from 'next/head'
import Link from 'next/link'
import {useRouter} from 'next/router'

const Cinema = () => {
  const router = useRouter()
  console.log(router)
  return (
    <div>
      <Head>
        <title>Cinema - {router.query.cinemaId}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        Cinema {router.query.cinemaId} <Link href='/'>Home</Link>
      </main>
    </div>
  )
};

export default Cinema;
