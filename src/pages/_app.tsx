import { AppProps } from 'next/app'
import { globalStyle } from '../styles/global'
import { Container } from '../styles/pages/app'
import Header from '../components/header'
import Sidebar from '../components/sidebar'
import { SidebarProvider } from '../contexts/sidebar'
import { CartProvider } from '../contexts/cart/CartProvider'

globalStyle()

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <CartProvider>
      <SidebarProvider>
        <Container>
          <Header />
          <Component {...pageProps} />
        </Container>

        <Sidebar />
      </SidebarProvider>
    </CartProvider>
  )
}

export default MyApp
