import Image from 'next/image'
import Stripe from 'stripe'

import { stripe } from '../lib/stripe'
import { HomeContainer, Product, ProductContainer } from '../styles/pages/home'

import 'keen-slider/keen-slider.min.css'
import { useKeenSlider } from 'keen-slider/react'
import { GetStaticProps } from 'next'
import Link from 'next/link'
import Head from 'next/head'
import { Handbag } from '@phosphor-icons/react'
import { Button } from '../styles/components/button'
import { useCart } from '../contexts/cart/useCart'
import { Product as ProductEntity } from '../entities/product'
import { formatPrice } from '../helpers/formatPrice'

interface HomeProps {
  products: ProductEntity[]
}

export default function Home({ products }: HomeProps) {
  const { addProduct } = useCart()

  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 2,
      spacing: 48
    }
  })

  function handleAddProduct(product: ProductEntity) {
    addProduct(product)
  }

  return (
    <>
      <Head>
        <title>Home | Ignite Shop</title>
      </Head>

      <HomeContainer ref={sliderRef}>
        {products.map((product) => {
          return (
            <ProductContainer key={product.id} className="keen-slider__slide">
              <Link href={`/product/${product.id}`}>
                <Product>
                  <Image
                    src={product.imageUrl}
                    width={520}
                    height={480}
                    alt=""
                  />
                </Product>
              </Link>

              <footer>
                <div>
                  <strong>{product.name}</strong>
                  <span>{formatPrice(product.price)}</span>
                </div>
                <div>
                  <Button
                    size="sm"
                    aria-label="Adicionar ao carrinho"
                    data-target="sidebar"
                    onClick={() => handleAddProduct(product)}
                  >
                    <Handbag size={32} weight="bold" />
                  </Button>
                </div>
              </footer>
            </ProductContainer>
          )
        })}
      </HomeContainer>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await stripe.products.list({
    expand: ['data.default_price']
  })

  const products = response.data.map((product) => {
    const price = product.default_price as Stripe.Price

    return {
      id: product.id,
      name: product.name,
      imageUrl: product.images[0],
      price: price.unit_amount / 100,
      description: product.description,
      defaultPriceId: price.id
    }
  })

  return {
    props: {
      products
    },
    revalidate: 60 * 60 * 2 //2 hours
  }
}
