import { Box, styled } from '@mui/material'

export const StyledRootProvider = styled(Box)(({ theme: { palette } }) => ({
  display: 'flex',
  backgroundColor: palette.primary.dark,
}))
