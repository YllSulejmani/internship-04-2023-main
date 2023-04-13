import PlayArrowIcon from '@mui/icons-material/PlayArrow'
import React from 'react'
import { StyledContainedButton } from './ContainedBtn.styled'
import { LOGIN_LABEL } from './utils/labels'

const ContainedBtn = () => {
  return (
    <div>
      <StyledContainedButton
        style={{ backgroundColor: '#9FBC1C' }}
        disableRipple
        disableFocusRipple
        variant="contained"
      >
        {LOGIN_LABEL}
        &nbsp;
        <PlayArrowIcon sx={{ fontSize: 'small' }} />
      </StyledContainedButton>
    </div>
  )
}

export default ContainedBtn
