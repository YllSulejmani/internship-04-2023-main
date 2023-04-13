import { forwardRef } from 'react'
import { IButtonVariant } from '..'
import { StyledOutlinedButton } from './StyledOutlinedButton'
import PlayArrowIcon from '@mui/icons-material/PlayArrow'

export const OutlinedButton = forwardRef<
  HTMLButtonElement,
  IButtonVariant<HTMLButtonElement>
>((props, ref) => (
  <StyledOutlinedButton
    variant="outlined"
    ref={ref}
    rightIcon={<PlayArrowIcon />}
    onClick={props.onClick}
    disableRipple
  >
    {props.children}
  </StyledOutlinedButton>
))
