import React from 'react'

declare module '@mui/material/styles' {
  interface Theme {
    status: {
      main: React.CSSProperties['color']
    }
  }

  interface PaletteColor {
    light?: string
    main: string
  }

  interface Palette {
    primary: Palette['primary']
  }

  interface PaletteOptions {
    primary: PaletteOptions['primary']
  }
}
