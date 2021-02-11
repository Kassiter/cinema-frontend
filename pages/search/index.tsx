import Head from 'next/head'
import Link from 'next/link'

const Search = () => {
  return (
    <div>
      <Head>
        <title>Cinema - Search</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        Search <Link href='/'>Home</Link>
      </main>
    </div>
  )
};

export default Search;
