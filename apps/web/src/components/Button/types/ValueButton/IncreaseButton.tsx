import { forwardRef, useState } from 'react'
import { IconButton } from '../IconButton/IconButton'
import { IButtonVariant } from '../index'

export const IncreaseButton = forwardRef<
  HTMLButtonElement,
  IButtonVariant<HTMLButtonElement>
>((props, ref) => {
  const [increase, setIncrease] = useState<number>(0)
  console.log({ increase })

  const onClickHandler = (_event: React.MouseEvent<HTMLElement>) => {
    setIncrease(increase + 1)
  }

  return (
    <IconButton onClick={onClickHandler} ref={ref} {...props}>
      +
    </IconButton>
  )
})
