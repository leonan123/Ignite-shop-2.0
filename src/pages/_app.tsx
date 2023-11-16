import { AppProps } from 'next/app'
import { globalStyle } from '../styles/global'
import { Container, Header } from '../styles/pages/app'

import Logo from '../assets/logo.svg'
import Image from 'next/image'

globalStyle()

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Container>
      <Header>
        <Image src={Logo.src} alt="" width={130} height={52} />
      </Header>
      <Component {...pageProps} />
    </Container>
  )
}

export default MyApp
