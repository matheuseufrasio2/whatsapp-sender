import styled from 'styled-components'

export const HomeContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background: ${(props) => props.theme.backgrounds.dark};
  overflow: hidden;
  /* border: 1px solid ${(props) => props.theme.colors.purpleDark}; */
  display: flex;
  flex-direction: column;
`
