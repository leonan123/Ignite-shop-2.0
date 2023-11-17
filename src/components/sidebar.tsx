import { X } from '@phosphor-icons/react'
import { Button } from '../styles/components/button'
import {
  SidebarClose,
  SidebarContainer,
  SidebarFooter,
  SidebarItem,
  SidebarItems
} from '../styles/components/sidebar'

export default function Sidebar() {
  return (
    <SidebarContainer isOpen={false}>
      <SidebarClose>
        <X size={32} />
      </SidebarClose>

      <h2>Sacola de compras</h2>

      <SidebarItems>
        <SidebarItem>
          <div></div>
          <div>
            <p>Camiseta Beyond the Limits</p>
            <strong>R$ 59,90</strong>
            <button>Remover</button>
          </div>
        </SidebarItem>
        <SidebarItem>
          <div></div>
          <div>
            <p>Camiseta Beyond the Limits</p>
            <strong>R$ 59,90</strong>
            <button>Remover</button>
          </div>
        </SidebarItem>
        <SidebarItem>
          <div></div>
          <div>
            <p>Camiseta Beyond the Limits</p>
            <strong>R$ 59,90</strong>
            <button>Remover</button>
          </div>
        </SidebarItem>
      </SidebarItems>

      <SidebarFooter>
        <div>
          <span>Quantidade</span>
          <p>2 itens</p>
        </div>
        <div>
          <span>Valor total</span>
          <p>R$ 59,90</p>
        </div>

        <Button size="lg" css={{ width: '100%' }}>
          Finalizar compra
        </Button>
      </SidebarFooter>
    </SidebarContainer>
  )
}
