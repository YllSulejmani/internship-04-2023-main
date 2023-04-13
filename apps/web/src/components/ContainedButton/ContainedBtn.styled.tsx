import { styled, Button } from '@mui/material'

export const StyledContainedButton = styled(Button)(
  ({ theme: { palette } }) => ({
    backgroundColor: palette.primary.main,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: '44px',
    borderRadius: '30px',
    color: '#000000',
    fontStyle: 'normal',
    fontWeight: 700,
    fontSize: '15px',
    lineHeight: '20px',
    width: '140px',
    padding: '7px 0px 7px 0px',
  }),
)
