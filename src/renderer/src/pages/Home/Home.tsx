import { MessageForm } from '@renderer/components/MessageForm/MessageForm'
import { HomeContainer } from './styles'

export function Home(): JSX.Element {
  return (
    <HomeContainer>
      <MessageForm />
    </HomeContainer>
  )
}
