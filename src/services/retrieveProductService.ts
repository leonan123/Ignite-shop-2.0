import Stripe from 'stripe'
import { Product } from '../entities/product'
import { stripe } from '../lib/stripe'

export async function retrieveProductService(
  productId: string
): Promise<Product> {
  const product = await stripe.products.retrieve(productId, {
    expand: ['default_price']
  })

  const price = product.default_price as Stripe.Price

  return {
    id: product.id,
    name: product.name,
    imageUrl: product.images[0],
    price: price.unit_amount / 100,
    description: product.description,
    defaultPriceId: price.id
  }
}
