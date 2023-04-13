import { ForwardedRef } from 'react'
import { ButtonProps } from '@mui/material'

export interface IButton<T>
  extends Pick<
    ButtonProps,
    | 'children'
    | 'className'
    | 'color'
    | 'disableElevation'
    | 'disableRipple'
    | 'disableTouchRipple'
    | 'disabled'
    | 'fullWidth'
    | 'onClick'
    | 'size'
    | 'type'
    | 'style'
  > {
  ref: ForwardedRef<T>
  rightIcon?: ButtonProps['endIcon']
  variant?: 'text' | 'outlined' | 'contained'
}

export interface IButtonVariant<T>
  // eslint-disable-next-line prettier/prettier
  extends Omit<IButton<T>, 'variant' | 'ref'> { }
