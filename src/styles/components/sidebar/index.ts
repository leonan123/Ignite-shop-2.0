import { Button } from './../button'
import { styled } from '@stitches/react'

export const SidebarContainer = styled('aside', {
  position: 'fixed',
  top: 0,
  right: 0,

  height: '100%',
  width: 'clamp(280px, 480px, 100%)',
  padding: '4.5rem 3rem 3rem',

  backgroundColor: '$gray800',

  display: 'flex',
  flexDirection: 'column',

  transform: 'translateX(100%)',
  opacity: 0,
  transition: 'all 0.2s cubic-bezier(.01,.05,.81,.32)',

  variants: {
    isOpen: {
      true: {
        opacity: 1,
        zIndex: 10,
        transform: 'translateX(0)'
      },
      false: {
        opacity: 0,
        zIndex: -1,
        transform: 'translateX(100%)'
      }
    }
  }
})

export const SidebarClose = styled('button', {
  cursor: 'pointer',

  position: 'absolute',
  top: '1.5rem',
  right: '1.5rem',

  color: '$gray300',
  border: 0,
  lineHeight: 0,
  backgroundColor: 'transparent',

  '&:hover': {
    color: '$gray100',
    transition: 'color 0.1s ease-in-out'
  }
})

export const SidebarItems = styled('ul', {
  listStyle: 'none',
  marginTop: '2rem',

  display: 'flex',
  flexDirection: 'column',
  gap: '1.5rem'
})

export const SidebarItem = styled('li', {
  display: 'flex',
  alignItems: 'center',
  gap: '1.25rem',

  'div:first-child': {
    width: 100,
    height: 93,
    borderRadius: 8,

    background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',

    img: {
      objectFit: 'cover'
    }
  },

  'div:last-child': {
    flex: 1,
    height: '100%',

    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',

    p: {
      color: '$gray300',
      fontSize: '$md'
    },

    strong: {
      fontSize: '$md',
      color: '$gray100',
      marginTop: '0.5rem'
    },

    button: {
      cursor: 'pointer',
      border: 0,
      marginTop: 'auto',

      fontSize: '1rem',
      fontWeight: 'bold',

      color: '$green500',
      background: 'transparent',

      '&:hover': {
        color: '$green300',
        transition: 'color 0.1s ease-in-out'
      }
    }
  }
})

export const SidebarFooter = styled('footer', {
  marginTop: 'auto',

  div: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  },

  'div:nth-child(1)': {
    color: '$gray300',

    p: {
      fontSize: '$md'
    }
  },

  'div:nth-child(2)': {
    marginTop: '0.5rem',
    color: '$gray100',
    fontWeight: 'bold',

    span: {
      fontSize: '$md'
    },

    p: {
      fontSize: '$xl'
    }
  },

  button: {
    marginTop: '3.625rem'
  }
})
