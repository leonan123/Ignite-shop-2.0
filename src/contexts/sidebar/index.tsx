import { ReactNode, createContext, useState } from 'react'

interface SidebarContextProps {
  isOpen: boolean
  showSidebar?: () => void
  hideSidebar?: () => void
}

export const SidebarContext = createContext<SidebarContextProps>({
  isOpen: false
})

interface SidebarProviderProps {
  children: ReactNode
}

export function SidebarProvider({ children }: SidebarProviderProps) {
  const [isOpen, setIsOpen] = useState(false)

  function showSidebar() {
    setIsOpen(true)
  }

  function hideSidebar() {
    setIsOpen(false)
  }

  return (
    <SidebarContext.Provider value={{ isOpen, showSidebar, hideSidebar }}>
      {children}
    </SidebarContext.Provider>
  )
}
