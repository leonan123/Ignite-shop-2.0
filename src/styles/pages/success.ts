import { styled } from '../'

export const SuccessContainer = styled('main', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',

  margin: '0 auto',
  height: 656,

  h1: {
    marginTop: '4rem',
    fontSize: '$2xl',
    color: '$gray100'
  },

  p: {
    color: '$gray300',
    fontSize: '$xl',
    textAlign: 'center',
    lineHeight: 1.4,

    maxWidth: 560,
    marginTop: '2rem'
  },

  a: {
    display: 'block',

    color: '$green500',
    fontSize: '$lg',
    fontWeight: 'bold',
    textDecoration: 'none',

    marginTop: '5rem',

    '&:hover': {
      color: '$green300'
    }
  }
})

export const ImageContainer = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  div: {
    width: 140,
    height: 140,

    background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
    borderRadius: '100%',
    padding: '0.25rem',

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    '+ div': {
      boxShadow: '0px 0px 60px 0px rgba(0, 0, 0, 0.80)',
      marginLeft: '-3.5rem',
      zIndex: 1
    }
  },

  img: {
    objectFit: 'cover'
  }
})
