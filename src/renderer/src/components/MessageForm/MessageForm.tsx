import { ButtonStyled, FormContainer, MessageFormContainer, Variables } from './styles'

import { Button, Input } from 'antd'

const variables = ['PRIMEIRONOME', 'SOBRENOME', 'TELEFONE']

export function MessageForm(): JSX.Element {
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
      <ButtonStyled>Enviar mensagem</ButtonStyled>
    </MessageFormContainer>
  )
}
