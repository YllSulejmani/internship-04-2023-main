import { forwardRef } from 'react'
import { IButtonVariant } from '../index'
import { StyledIconButton } from './IconButton.styled'

export const IconButton = forwardRef<
  HTMLButtonElement,
  IButtonVariant<HTMLButtonElement>
>((props, ref) => {
  return (
    <StyledIconButton
      variant="contained"
      type="button"
      disableRipple
      disableElevation
      ref={ref}
      {...props}
    >
      {props.children}
    </StyledIconButton>
  )
})
