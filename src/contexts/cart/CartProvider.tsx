import { ReactNode, createContext, useState } from 'react'
import { Product } from '../../entities/product'

interface CartContext {
  products: Product[]
  addProduct: (product: Product) => void
  removeProduct: (productId: string) => void
}

export const CartContext = createContext<CartContext>({} as CartContext)

interface CartProviderProps {
  children: ReactNode
}
export function CartProvider({ children }: CartProviderProps) {
  const [products, setProducts] = useState<Product[]>([])

  function addProduct(product: Product) {
    const productExists = products.find((item) => item.id === product.id)

    if (productExists) return

    setProducts((state) => [...state, product])
  }

  function removeProduct(productId: string) {
    setProducts((state) => state.filter((product) => product.id !== productId))
  }

  return (
    <CartContext.Provider value={{ products, addProduct, removeProduct }}>
      {children}
    </CartContext.Provider>
  )
}
