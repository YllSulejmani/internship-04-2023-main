import { OutlinedButton } from '@components/Button/types/OutlinedButton/OutlinedButton'

export default function Home() {
  return (
    <OutlinedButton onClick={() => console.log('outlined button clicked')}>
      Sign Up
    </OutlinedButton>
  )
}
