// Mui
import { Stack } from '@mui/material'
// Components
import { IncreaseButton } from '@components/Button/types/ValueButton/IncreaseButton'
import { DecreaseButton } from '@components/Button/types/ValueButton/DecreaseButton'
import SelectGenderForm from '@domain/users/forms/SelectGenderForm/SelectGenderForm'
// import Tabs from '@components/Tabs/Tabs' // there is a module installed but not disscused with the others
// Style
import { StyledContainer } from './UsersManager.styled'

export const UsersManager = () => {
  return (
    <StyledContainer>
      <Stack>
        <IncreaseButton />
        <DecreaseButton />
      </Stack>
      <SelectGenderForm />
      {/* <Tabs /> */}
    </StyledContainer>
  )
}
