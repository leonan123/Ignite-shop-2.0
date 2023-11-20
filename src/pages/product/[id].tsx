import { useRouter } from 'next/router'
import {
  ImageContainer,
  ProductButton,
  ProductContainer,
  ProductDetails
} from '../../styles/pages/product'

import { GetStaticPaths, GetStaticProps } from 'next'
import { useState } from 'react'

import Image from 'next/image'
import Head from 'next/head'
import { useSidebar } from '../../contexts/sidebar/useSidebar'
import { Product } from '../../entities/product'
import { retrieveProductService } from '../../services/retrieveProductService'
import { formatPrice } from '../../helpers/formatPrice'
import { useCart } from '../../contexts/cart/useCart'

interface ProductProps {
  product: Product
}

export default function Product({ product }: ProductProps) {
  const { showSidebar } = useSidebar()
  const { addProduct } = useCart()
  const { isFallback } = useRouter()

  if (isFallback) {
    return <p>Loading...</p>
  }

  function handleAddToCart() {
    addProduct(product)
    showSidebar()
  }

  return (
    <>
      <Head>
        <title>{product.name} | Ignite Shop</title>
      </Head>

      <ProductContainer>
        <ImageContainer>
          <Image src={product.imageUrl} width={520} height={480} alt="" />
        </ImageContainer>

        <ProductDetails>
          <h1>{product.name}</h1>
          <span>{formatPrice(product.price)}</span>
          <p>{product.description}</p>

          <ProductButton
            size="lg"
            onClick={handleAddToCart}
            data-target="sidebar"
          >
            Colocar na sacola
          </ProductButton>
        </ProductDetails>
      </ProductContainer>
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: true
  }
}

export const getStaticProps: GetStaticProps<any, { id: string }> = async ({
  params
}) => {
  const productId = params.id
  const product = await retrieveProductService(productId)

  return {
    props: {
      product
    },
    revalidate: 60 * 60 * 1 // 1 hour
  }
}
