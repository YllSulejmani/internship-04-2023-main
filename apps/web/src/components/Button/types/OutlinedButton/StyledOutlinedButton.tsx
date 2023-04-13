import { styled } from '@mui/material'
import { Button } from '@components/Button/components/Button'

export const StyledOutlinedButton = styled(Button)(
  ({ theme: { palette } }) => ({
    width: 140,
    height: 44,
    padding: '7px 14px',
    border: '2px solid',
    borderRadius: 30,
    color: palette.primary.main,
    fontSize: 17,
    fontWeight: 600,
    backgroundColor: palette.primary.dark,
    display: 'flex',
    textAlign: 'center',
    minWidth: 0,
    '&:hover': {
      backgroundColor: palette.primary.dark,
      border: '2px solid',
    },
    whiteSpace: 'nowrap',
  }),
)
