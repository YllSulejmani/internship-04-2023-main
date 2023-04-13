import { FC } from 'react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { IRootProvider } from './types'
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material'
import { StyledRootProvider } from './StyledRootProvider'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      staleTime: 0,
    },
  },
})

const theme = createTheme({
  palette: {
    primary: {
      light: '#CECDCD',
      main: '#9FBC1C',
      dark: '#000000',
      contrastText: '#FFFFFF',
    },
  },
})

export const RootProvider: FC<IRootProvider> = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <StyledRootProvider>
        <CssBaseline />
        <QueryClientProvider client={queryClient}>
          {children}
        </QueryClientProvider>
      </StyledRootProvider>
    </ThemeProvider>
  )
}
