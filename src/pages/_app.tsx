import { AppProps } from 'next/app'
import { globalStyle } from '../styles/global'
import { Container } from '../styles/pages/app'
import Header from '../components/header'
import Sidebar from '../components/sidebar'

globalStyle()

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Container onClick={() => console.log('click')}>
      <Header />
      <Component {...pageProps} />

      <Sidebar />
    </Container>
  )
}

export default MyApp
