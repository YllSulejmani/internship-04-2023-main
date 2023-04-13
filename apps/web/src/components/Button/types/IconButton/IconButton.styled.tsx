import { styled } from '@mui/material'
import { Button } from '@components/Button/components/Button'

export const StyledIconButton = styled(Button)(({ theme: { palette } }) => ({
  display: 'flex',
  textAlign: 'center',
  backgroundColor: palette.primary.main,
  color: palette.primary.dark,
  width: 50,
  height: 50,
  borderRadius: 50,
  minWidth: 0,
  '&:hover': {
    backgroundColor: palette.primary.main,
  },
  fontSize: 36,
}))
