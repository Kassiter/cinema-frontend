import '../styles/globals.scss'
import NextNprogress from 'nextjs-progressbar';

const MyApp = ({ Component, pageProps }) => {
  return (
    <>
      <NextNprogress
        color="#29D"
        startPosition={0.3}
        stopDelayMs={200}
        height="3"
      />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
