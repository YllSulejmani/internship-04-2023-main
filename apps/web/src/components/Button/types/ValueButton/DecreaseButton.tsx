import { forwardRef, useState } from 'react'
import { IconButton } from '../IconButton/IconButton'
import { IButtonVariant } from '../index'

export const DecreaseButton = forwardRef<
  HTMLButtonElement,
  IButtonVariant<HTMLButtonElement>
>((props, ref) => {
  const [decrease, setDecrease] = useState<number>(0)
  console.log({ decrease })

  const onClickHandler = (_event: React.MouseEvent<HTMLElement>) => {
    setDecrease(decrease - 1)
  }

  return (
    <IconButton onClick={onClickHandler} ref={ref} {...props}>
      -
    </IconButton>
  )
})
