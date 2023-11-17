import Image from 'next/image'
import { ButtonCart, HeaderContainer } from '../styles/components/header'

import Logo from '../assets/logo.svg'
import { Handbag } from '@phosphor-icons/react'

export default function Header() {
  return (
    <HeaderContainer>
      <Image src={Logo.src} alt="" width={130} height={52} />

      <ButtonCart
        variant="secondary"
        size="sm"
        empty={true}
        disabled={true}
        aria-label="Carrinho de compras"
        data-target='sidebar'
      >
        <Handbag size={24} weight="bold" />
        <span>1</span>
      </ButtonCart>
    </HeaderContainer>
  )
}
