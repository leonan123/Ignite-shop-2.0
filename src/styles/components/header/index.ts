import { styled } from '../../'
import { Button } from '../button'

export const HeaderContainer = styled('header', {
  width: '100%',
  maxWidth: 1180,
  margin: '0 auto',
  padding: '2rem 0',

  display: 'flex',
  justifyContent: 'space-between',

  button: {
    position: 'relative',
    cursor: 'pointer',

    color: '$gray100',
    fontWeight: 'bold',

    border: 0,
    borderRadius: 6,
    backgroundColor: '$gray800',

    padding: '0.75rem',
    lineHeight: 'none',

    span: {
      fontSize: '0.85rem',
      position: 'absolute',
      right: '-10px',
      top: '-10px',

      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',

      width: 24,
      height: 24,
      borderRadius: '50%',
      backgroundColor: '$green500',

      border: '2px solid $gray900'
    }
  }
})

export const ButtonCart = styled(Button, {
  '&:not(disabled):hover': {
    opacity: 0.6
  },

  variants: {
    empty: {
      true: {
        opacity: 0.6,

        span: {
          visibility: 'hidden'
        }
      },

      false: {
        opacity: 1,

        span: {
          visibility: 'visible'
        }
      }
    }
  }
})
