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
  variants: {
    empty: {
      true: {
        opacity: 0.6,

        span: {
          visibility: 'hidden'
        },

        '&:hover': {
          opacity: 0.6
        }
      }
    }
  }
})
