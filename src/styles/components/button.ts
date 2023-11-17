import { styled } from '@stitches/react'

export const Button = styled('button', {
  position: 'relative',

  cursor: 'pointer',
  fontSize: '1rem',
  fontWeight: 'bold',

  border: 0,
  borderRadius: 6,

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  '&:disabled': {
    opacity: 0.6,
    cursor: 'not-allowed'
  },

  variants: {
    variant: {
      primary: {
        backgroundColor: '$green500',
        color: '$gray100',

        '&:not(disabled):hover': {
          backgroundColor: '$green300',
          transition: 'background-color 0.1s ease-in-out'
        },

        '&:active': {
          backgroundColor: '$green500',
          transition: 'none'
        }
      },
      secondary: {
        backgroundColor: '$gray800',
        color: '$gray100',
        opacity: 0.9,

        '&:not(disabled):hover': {
          opacity: 1,
          transition: 'opacity 0.1s ease-in-out'
        }
      }
    },

    size: {
      sm: {
        padding: '0.75rem',
        fontSize: '$md'
      },

      lg: {
        padding: '1.25rem',
        fontSize: '$lg'
      }
    }
  },

  defaultVariants: {
    variant: 'primary'
  }
})
