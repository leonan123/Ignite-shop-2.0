import { X } from '@phosphor-icons/react'
import { Button } from '../styles/components/button'
import {
  SidebarClose,
  SidebarContainer,
  SidebarFooter,
  SidebarItem,
  SidebarItems
} from '../styles/components/sidebar'
import { useSidebar } from '../contexts/sidebar/useSidebar'
import { useCart } from '../contexts/cart/useCart'
import Image from 'next/image'
import { formatPrice } from '../helpers/formatPrice'
import { useState } from 'react'
import axios from 'axios'

export default function Sidebar() {
  const { products, removeProduct } = useCart()
  const { isOpen, hideSidebar } = useSidebar()

  const [isCreatingCheckoutSession, setIsCreatingCheckoutSession] =
    useState(false)

  function handleRemoveClick(productId: string) {
    removeProduct(productId)
  }

  const quantity = products.length
  const totalPrice = products.reduce((total, product) => {
    return total + product.price
  }, 0)

  async function handleBuyProduct() {
    try {
      setIsCreatingCheckoutSession(true)

      const response = await axios.post('/api/createCheckoutSession', {
        products
      })

      const { checkoutUrl } = response.data

      window.location.href = checkoutUrl
    } catch (err) {
      setIsCreatingCheckoutSession(false)
      alert('Falha ao redirecionar ao checkout')
    }
  }

  return (
    <SidebarContainer isOpen={isOpen}>
      <SidebarClose onClick={hideSidebar}>
        <X size={32} />
      </SidebarClose>

      <h2>Sacola de compras</h2>

      <SidebarItems>
        {products.map((product) => {
          return (
            <SidebarItem key={product.id}>
              <div>
                <Image src={product.imageUrl} width={100} height={100} alt="" />
              </div>
              <div>
                <p>{product.name}</p>
                <strong>{formatPrice(product.price)}</strong>
                <button onClick={() => handleRemoveClick(product.id)}>
                  Remover
                </button>
              </div>
            </SidebarItem>
          )
        })}
      </SidebarItems>

      <SidebarFooter>
        <div>
          <span>Quantidade</span>
          <p>{quantity} itens</p>
        </div>
        <div>
          <span>Valor total</span>
          <p>
            {new Intl.NumberFormat('pt-BR', {
              style: 'currency',
              currency: 'BRL'
            }).format(totalPrice)}
          </p>
        </div>

        <Button
          size="lg"
          css={{ width: '100%' }}
          onClick={handleBuyProduct}
          disabled={isCreatingCheckoutSession}
        >
          Finalizar compra
        </Button>
      </SidebarFooter>
    </SidebarContainer>
  )
}
