import { styled } from '../'

export const HomeContainer = styled('main', {
  display: 'flex',
  width: '100%',
  maxWidth: 'calc(100vw - ((100vw - 1180px) / 2))',
  marginLeft: 'auto',
  minHeight: 656
})

export const Product = styled('div', {
  height: '100%',

  background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
  borderRadius: 8,
  cursor: 'pointer',
  position: 'relative',
  overflow: 'hidden',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  img: {
    objectFit: 'cover'
  },

  footer: {
    position: 'absolute',
    bottom: '0.25rem',
    left: '0.25rem',
    right: '0.25rem',

    padding: '1.25rem',
    borderRadius: 6,
    backgroundColor: '$gray800',

    transform: 'translateY(110%)',
    opacity: 0,
    transition: 'all 0.2s ease-in-out',

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',

    ':first-child': {
      display: 'flex',
      flexDirection: 'column',
      gap: '0.5rem'
    }
  },

  strong: {
    fontSize: '$lg',
    color: '$gray100'
  },

  span: {
    fontSize: '$xl',
    fontWeight: 'bold',
    color: '$green300'
  },

  '&:hover': {
    footer: {
      opacity: 1,
      transform: 'translateY(0)'
    }
  }
})
