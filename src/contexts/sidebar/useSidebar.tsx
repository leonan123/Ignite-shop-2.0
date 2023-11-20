import { useContext } from 'react'
import { SidebarContext } from './'

export function useSidebar() {
  const ctx = useContext(SidebarContext)

  return ctx
}
