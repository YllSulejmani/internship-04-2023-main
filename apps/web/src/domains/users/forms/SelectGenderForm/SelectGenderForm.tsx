import * as React from 'react'
import { listStyle, StyledFormContainer } from './SelectGenderForm.styled'
import RadioGroup from '@mui/material/RadioGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import FormControl from '@mui/material/FormControl'
import { Radio } from '@mui/material'

const SelectGenderForm = () => {
  const [value, setValue] = React.useState('')
  const options = [
    { value: 'female', label: 'Female' },
    { value: 'male', label: 'Male' },
    { value: 'other', label: 'Prefer Not To Say' },
  ]
  const handleRadioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
  }

  return (
    <StyledFormContainer>
      <FormControl>
        <RadioGroup name="gender" value={value} onChange={handleRadioChange}>
          {options.map((option, index) => (
            <FormControlLabel
              key={index}
              style={{
                ...listStyle,
                ...(value === option.value
                  ? {
                      backgroundColor: '#9FBC1C',
                      color: '#000000',
                    }
                  : {}),
              }}
              value={option.value}
              control={<Radio sx={{ display: 'none' }} />}
              label={option.label}
            />
          ))}
        </RadioGroup>
      </FormControl>
    </StyledFormContainer>
  )
}

export default SelectGenderForm
