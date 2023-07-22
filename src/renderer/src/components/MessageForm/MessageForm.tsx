import { useState } from 'react'
import { ButtonStyled, FormContainer, MessageFormContainer, Variables } from './styles'
import { Button, Input, Spin } from 'antd'

const variables = ['PRIMEIRONOME', 'SOBRENOME', 'TELEFONE']

export function MessageForm(): JSX.Element {
  const [isLoading, setIsLoading] = useState(false)

  const handleAutomationClick = async (): Promise<void> => {
    setIsLoading(true)
    try {
      await window.api.createGlobalDriver()
      await window.api.openWhatsapp()
    } catch {
      console.log('error')
    }
    setIsLoading(false)
  }

  return (
    <MessageFormContainer>
      <FormContainer>
        <Input.TextArea
          style={{ height: 200, resize: 'none' }}
          placeholder="Mensagem para ser enviada"
        />
        <Variables>
          {variables.map((variable) => (
            <Button type="dashed" style={{ width: 150 }} key={variable}>
              {variable}
            </Button>
          ))}
        </Variables>
      </FormContainer>
      <ButtonStyled onClick={handleAutomationClick}>
        {isLoading ? <Spin /> : 'Enviar mensagem'}
      </ButtonStyled>
    </MessageFormContainer>
  )
}
