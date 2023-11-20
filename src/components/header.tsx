import Image from 'next/image'
import { ButtonCart, HeaderContainer } from '../styles/components/header'

import Logo from '../assets/logo.svg'
import { Handbag } from '@phosphor-icons/react'
import { useSidebar } from '../contexts/sidebar/useSidebar'
import { useCart } from '../contexts/cart/useCart'

export default function Header() {
  const { showSidebar } = useSidebar()
  const { products } = useCart()

  const quantity = products.length

  return (
    <HeaderContainer>
      <Image src={Logo.src} alt="" width={130} height={52} />

      <ButtonCart
        variant="secondary"
        size="sm"
        empty={!quantity}
        disabled={!quantity}
        onClick={showSidebar}
        aria-label="Carrinho de compras"
        data-target="sidebar"
      >
        <Handbag size={24} weight="bold" />
        <span>{quantity}</span>
      </ButtonCart>
    </HeaderContainer>
  )
}
